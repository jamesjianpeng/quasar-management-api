"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestjsWinstonLoggintLibModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsWinstonLoggintLibModule = void 0;
const common_1 = require("@nestjs/common");
const constans_1 = require("./constans");
const nestjs_winston_logging_lib_service_1 = require("./nestjs-winston-logging-lib.service");
let NestjsWinstonLoggintLibModule = NestjsWinstonLoggintLibModule_1 = class NestjsWinstonLoggintLibModule {
    static register(options) {
        return {
            module: NestjsWinstonLoggintLibModule_1,
            providers: [
                {
                    provide: constans_1.ILOGGLING_OPTION,
                    useValue: options,
                },
                nestjs_winston_logging_lib_service_1.NestjsWinstonLoggingLibService,
            ],
            exports: [nestjs_winston_logging_lib_service_1.NestjsWinstonLoggingLibService],
        };
    }
};
NestjsWinstonLoggintLibModule = NestjsWinstonLoggintLibModule_1 = __decorate([
    common_1.Module({
        providers: [nestjs_winston_logging_lib_service_1.NestjsWinstonLoggingLibService],
        exports: [nestjs_winston_logging_lib_service_1.NestjsWinstonLoggingLibService],
    })
], NestjsWinstonLoggintLibModule);
exports.NestjsWinstonLoggintLibModule = NestjsWinstonLoggintLibModule;
//# sourceMappingURL=nestjs-winston-logging-lib.module.js.map