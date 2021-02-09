"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const settings_json_1 = __importDefault(require("../../settings.json"));
const nestjs_mdb_lib_1 = require("@smartblog/nestjs-mdb-lib");
const nestjs_rdb_lib_1 = require("@smartblog/nestjs-rdb-lib");
const nestjs_winston_logging_lib_1 = require("./nestjs-winston-logging-lib");
const logging_interceptor_1 = require("./interceptor/logging.interceptor");
const standardResp_interceptor_1 = require("./interceptor/standardResp.interceptor");
const nestjs_logger_lib_1 = require("./nestjs-logger-lib");
const schedule_1 = require("@nestjs/schedule");
const event_module_1 = require("./nestjs-websocket-lib/event.module");
const utils_1 = require("./utils");
const mapper_service_1 = require("./mapper.service");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            nestjs_mdb_lib_1.NestjsMdbLibModule.register([
                { url: settings_json_1.default.mongo_sz, key: 'sz' },
            ]),
            nestjs_rdb_lib_1.NestjsRdbLibModule.register([
                { url: settings_json_1.default.redis_sz_1, key: 'sz_1' },
                { url: settings_json_1.default.redis_sz_2, key: 'sz_2' }
            ]),
            schedule_1.ScheduleModule.forRoot(),
            nestjs_winston_logging_lib_1.NestjsWinstonLoggintLibModule.register({
                service: 'live-learn-service',
                fileLocation: utils_1.createLogFileLocation(settings_json_1.default.serverLogFileLocation)
            }),
            event_module_1.EventsModule,
        ],
        providers: [
            { provide: core_1.APP_INTERCEPTOR, useClass: logging_interceptor_1.LoggingInterceptor },
            { provide: core_1.APP_INTERCEPTOR, useClass: standardResp_interceptor_1.StandardRespInterceptor },
            nestjs_logger_lib_1.NestjsLoggerLibService,
            mapper_service_1.MapperService
        ],
        exports: [
            nestjs_mdb_lib_1.NestjsMdbLibModule,
            nestjs_rdb_lib_1.NestjsRdbLibModule,
            nestjs_winston_logging_lib_1.NestjsWinstonLoggintLibModule,
            event_module_1.EventsModule,
            nestjs_logger_lib_1.NestjsLoggerLibService,
            mapper_service_1.MapperService
        ],
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map