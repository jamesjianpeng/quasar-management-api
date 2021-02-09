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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsWinstonLoggingLibService = void 0;
const common_1 = require("@nestjs/common");
const constans_1 = require("./constans");
const winston_1 = __importDefault(require("winston"));
let NestjsWinstonLoggingLibService = class NestjsWinstonLoggingLibService {
    constructor(options) {
        this.options = options;
        this.loggerOptions = [
            {
                level: 'info'
            },
            {
                level: 'warn'
            },
            {
                level: 'error'
            }
        ];
        this.loggingMap = [];
        this.createLoggers();
    }
    createLogger(options) {
        return winston_1.default.createLogger(options);
    }
    createLoggerOptions({ level }) {
        let filename = `${level}.log`;
        filename = this.options.fileLocation ? `${this.options.fileLocation}/${filename}` : filename;
        const options = {
            level,
            defaultMeta: {
                service: this.options.service
            },
            transports: [
                new winston_1.default.transports.File({ filename, level })
            ]
        };
        return Object.assign(Object.assign({}, constans_1.commonConfig), options);
    }
    createLoggers() {
        this.loggerOptions.map((opt) => {
            const option = this.createLoggerOptions(opt);
            this.loggingMap[opt.level] = this.createLogger(option);
        });
        return this.loggingMap;
    }
    log({ level, text }) {
        console.log(this.loggingMap);
        const logger = this.loggingMap[level];
        if (!logger) {
            console.error(`${level} logger is invalid，${text} don't output`);
            return;
        }
        return logger[level](text);
    }
    async test() {
        return 'nestjs loggint lib';
    }
};
NestjsWinstonLoggingLibService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constans_1.ILOGGLING_OPTION)),
    __metadata("design:paramtypes", [Object])
], NestjsWinstonLoggingLibService);
exports.NestjsWinstonLoggingLibService = NestjsWinstonLoggingLibService;
//# sourceMappingURL=nestjs-winston-logging-lib.service.js.map