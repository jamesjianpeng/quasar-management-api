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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_mdb_lib_1 = require("@smartblog/nestjs-mdb-lib");
const nestjs_rdb_lib_1 = require("@smartblog/nestjs-rdb-lib");
const user_entity_1 = require("../../entity/user.entity");
const bcryptjs_1 = require("bcryptjs");
const user_service_1 = require("../user/user.service");
const interface_1 = require("../../core/interface");
const events_gateway_1 = require("../../core/nestjs-websocket-lib/events.gateway");
let LoginService = class LoginService {
    constructor(nestjsMdbLibService, nestjsRdbLibService, userService, eventsGateway) {
        this.nestjsMdbLibService = nestjsMdbLibService;
        this.nestjsRdbLibService = nestjsRdbLibService;
        this.userService = userService;
        this.eventsGateway = eventsGateway;
    }
    onModuleInit() {
        this.init();
    }
    async init() {
        const data = { cliKey: 'sz', db: 'LiveLearn', col: 'user' };
        this.colUser = await this.nestjsMdbLibService.getCol(data);
    }
    async login(user) {
        let { password } = user;
        const { data: currentUser } = await this.userService.getUser(user);
        password = Buffer.from(password, 'base64').toString();
        const passwordMatch = await bcryptjs_1.compare(password, currentUser.password);
        this.eventsGateway.clientServerMap.message.emit('toClient', '登陆成功');
        return passwordMatch ? { msg: '登陆成功' } : { code: 1, msg: '用户名或者密码错误' };
    }
    async logout() {
        return this.nestjsMdbLibService.test();
    }
    async register(user) {
        let { password } = user;
        password = await this.decryptPassword(password);
        user.password = await this.hashPassword(password);
        const { code, msg, data = {} } = await this.userService.addUser(user);
        if (code) {
            return { code, msg: `${data.email}, ${msg}`, };
        }
        return { msg: '注册成功' };
    }
    async decryptPassword(password) {
        password = Buffer.from(password, 'base64').toString();
        return password;
    }
    async hashPassword(password) {
        const salt = await bcryptjs_1.genSalt(12);
        const hashedPassword = await bcryptjs_1.hash(password, salt);
        return hashedPassword;
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_mdb_lib_1.NestjsMdbLibService,
        nestjs_rdb_lib_1.NestjsRdbLibService,
        user_service_1.UserService,
        events_gateway_1.EventsGateway])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map