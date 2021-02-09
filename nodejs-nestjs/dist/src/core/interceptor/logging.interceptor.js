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
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const nestjs_winston_logging_lib_1 = require("../nestjs-winston-logging-lib");
const nestjs_logger_lib_1 = require("../nestjs-logger-lib");
let LoggingInterceptor = class LoggingInterceptor {
    constructor(nestjsWinstonLoggingLibService, nestjsLoggerLibService) {
        this.nestjsWinstonLoggingLibService = nestjsWinstonLoggingLibService;
        this.nestjsLoggerLibService = nestjsLoggerLibService;
    }
    intercept(context, next) {
        const args = context.getArgs();
        const [req] = args;
        this.nestjsWinstonLoggingLibService.log({ level: 'info', text: 'Before...' });
        this.nestjsLoggerLibService.log(`request {${req.url}, ${req.method}} `, 'loggingIntercepter');
        const now = Date.now();
        return next
            .handle()
            .pipe(operators_1.tap(() => {
            const diff = Date.now() - now;
            this.nestjsLoggerLibService.log(`request {${req.url}, ${req.method}} spend time: ${diff}ms`, 'loggingIntercepter');
        }));
    }
};
LoggingInterceptor = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_winston_logging_lib_1.NestjsWinstonLoggingLibService,
        nestjs_logger_lib_1.NestjsLoggerLibService])
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map