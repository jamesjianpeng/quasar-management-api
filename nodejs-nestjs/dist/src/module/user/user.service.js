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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_mdb_lib_1 = require("@smartblog/nestjs-mdb-lib");
const nestjs_rdb_lib_1 = require("@smartblog/nestjs-rdb-lib");
const user_entity_1 = require("../../entity/user.entity");
const interface_1 = require("../../core/interface");
let UserService = class UserService {
    constructor(nestjsMdbLibService, nestjsRdbLibService) {
        this.nestjsMdbLibService = nestjsMdbLibService;
        this.nestjsRdbLibService = nestjsRdbLibService;
    }
    onModuleInit() {
        this.init();
    }
    async init() {
        const data = { cliKey: 'sz', db: 'LiveLearn', col: 'user' };
        this.colUser = await this.nestjsMdbLibService.getCol(data);
    }
    async getUser(user) {
        const { email } = user;
        const currentUser = await this.colUser.findOne({ email });
        return { code: (currentUser ? 0 : 1), data: currentUser };
    }
    async addUser(user) {
        const { email } = user;
        const currentUser = await this.colUser.findOne({ email });
        if (currentUser) {
            return { code: 1, data: currentUser, msg: '已经存在该用户' };
        }
        await this.colUser.insertOne(user);
        return { data: currentUser };
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_mdb_lib_1.NestjsMdbLibService,
        nestjs_rdb_lib_1.NestjsRdbLibService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map