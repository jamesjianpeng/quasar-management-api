"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const nestjs_mdb_lib_1 = require("@smartblog/nestjs-mdb-lib");
const constants_1 = require("./constants");
const bson_1 = require("bson");
let UploadProcessor = class UploadProcessor {
    constructor(nestjsMdbLibService) {
        this.nestjsMdbLibService = nestjsMdbLibService;
    }
    async queueHandleUpload(job) {
        const data = { cliKey: 'sz', db: 'queueUpload', col: 'subject' };
        console.log(JSON.stringify(job));
        const col = await this.nestjsMdbLibService.getCol(data);
        const jobData = job.data;
        const res = await col.findOne({ _id: new bson_1.ObjectID(jobData._id) });
        const count = 1;
        const resp = await this.upload(res, count);
        console.log('finish');
        console.log('change Before', JSON.stringify(resp));
        const respData = await col.updateOne({ _id: new bson_1.ObjectId(jobData._id) }, { ['$set']: { state: 2 } });
        console.log('changeAfter', JSON.stringify(respData), '\n');
        return resp;
    }
    onQueueProgress(job, progress) {
        console.log('onQueueProgress');
        console.log(JSON.stringify(job));
        console.log((progress));
        console.log('onQueueProgress--- \n');
    }
    onQueueStalled(job) {
        console.log('onQueueStalled');
        console.log(JSON.stringify(job));
        console.log('onQueueStalled--- \n');
    }
    onQueueWaiting(job) {
        console.log('onQueueWaiting');
        console.log(JSON.stringify(job));
        console.log('onQueueWaiting--- \n');
    }
    onQueueActive(job) {
        console.log('onQueueActive');
        console.log(JSON.stringify(job));
        console.log('onQueueActive--- \n');
    }
    onQueueCompleted(job) {
        console.log('onQueueCompleted');
        console.log(JSON.stringify(job));
        console.log('onQueueCompleted--- \n');
    }
    onQueueFailed(job, error) {
        console.log('onQueueFailed');
        console.log(JSON.stringify(job));
        console.log(JSON.stringify(error));
        console.log('onQueueFailed--- \n');
    }
    onQueueError(error) {
        console.log('onQueueError');
        console.log(error);
        console.log('onQueueError--- \n');
    }
    upload(data, count = 1, finishCount) {
        console.log(JSON.stringify(data), count, '\n');
        finishCount = finishCount || 10;
        return new Promise(async (resolve, reject) => {
            setTimeout(async () => {
                if (count > finishCount) {
                    resolve(data);
                }
                else {
                    resolve(await this.upload(data, count + 1));
                }
            }, 1000);
        });
    }
};
__decorate([
    bull_1.Process(constants_1.QUEUE_HANDLE_UPLOAD),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadProcessor.prototype, "queueHandleUpload", null);
__decorate([
    bull_1.OnQueueProgress(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UploadProcessor.prototype, "onQueueProgress", null);
__decorate([
    bull_1.OnQueueStalled(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadProcessor.prototype, "onQueueStalled", null);
__decorate([
    bull_1.OnQueueWaiting(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadProcessor.prototype, "onQueueWaiting", null);
__decorate([
    bull_1.OnQueueActive(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadProcessor.prototype, "onQueueActive", null);
__decorate([
    bull_1.OnQueueCompleted(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadProcessor.prototype, "onQueueCompleted", null);
__decorate([
    bull_1.OnQueueFailed(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Error]),
    __metadata("design:returntype", void 0)
], UploadProcessor.prototype, "onQueueFailed", null);
__decorate([
    bull_1.OnQueueError(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Error]),
    __metadata("design:returntype", void 0)
], UploadProcessor.prototype, "onQueueError", null);
UploadProcessor = __decorate([
    bull_1.Processor(constants_1.QUEUE_NAME_UPLOAD),
    __metadata("design:paramtypes", [nestjs_mdb_lib_1.NestjsMdbLibService])
], UploadProcessor);
exports.UploadProcessor = UploadProcessor;
//# sourceMappingURL=upload.processor.js.map