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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_mdb_lib_1 = require("@smartblog/nestjs-mdb-lib");
const constants_1 = require("./constants");
const bull_1 = require("@nestjs/bull");
let UploadService = class UploadService {
    constructor(nestjsMdbLibService, uploadFileQueue) {
        this.nestjsMdbLibService = nestjsMdbLibService;
        this.uploadFileQueue = uploadFileQueue;
    }
    async add({ name, data, options = {} }) {
        options = Object.assign({ attempts: 2 }, options);
        return await this.uploadFileQueue.add(name, data, options);
    }
    async test() {
        const data = { cliKey: 'sz', db: 'ghost-live&learn', col: 'subject_sz' };
        const col = await this.nestjsMdbLibService.getCol(data);
        await col.insertOne({ subject: '数据库概率', code: '02323' });
        const dd = { cliKey: 'hk', db: 'ghost-live&learn', col: 'subject_hk' };
        const colHk = await this.nestjsMdbLibService.getCol(dd);
        return Promise.resolve({ hk: await (await colHk.find()).toArray(), sz: await (await col.find()).toArray() });
    }
    async addMongoData(options) {
        const data = { cliKey: 'sz', db: 'queueUpload', col: 'subject' };
        const col = await this.nestjsMdbLibService.getCol(data);
        const opt = Object.assign({ subject: '数据库概率' + new Date().getTime().toString(), code: '02323', state: 1 }, options);
        await col.insertOne(opt);
        return opt;
    }
    async upload(data) {
        const res = await this.addMongoData(data);
        const opt = {
            name: constants_1.QUEUE_HANDLE_UPLOAD,
            data: Object.assign(Object.assign({}, data), { _id: res._id, rondom: Math.random() }),
        };
        const job = await this.add(opt);
        return Promise.resolve({
            job,
            res,
        });
    }
    async uploadMore(data) {
        const promiseAll = data.map(async (opt) => {
            return await this.upload(opt);
        });
        return await Promise.all(promiseAll);
    }
};
UploadService = __decorate([
    common_1.Injectable(),
    __param(1, bull_1.InjectQueue(constants_1.QUEUE_NAME_UPLOAD)),
    __metadata("design:paramtypes", [nestjs_mdb_lib_1.NestjsMdbLibService, Object])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map