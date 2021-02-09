"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsLoggerLibService = void 0;
const common_1 = require("@nestjs/common");
let NestjsLoggerLibService = class NestjsLoggerLibService extends common_1.Logger {
    log(message, trace) {
        super.log(message, trace);
    }
    error(message, trace) {
        super.error(message, trace);
    }
    warn(message) {
        super.warn(message);
    }
    debug(message) {
        super.debug(message);
    }
};
NestjsLoggerLibService = __decorate([
    common_1.Injectable()
], NestjsLoggerLibService);
exports.NestjsLoggerLibService = NestjsLoggerLibService;
//# sourceMappingURL=nestjs-logger-lib.service.js.map