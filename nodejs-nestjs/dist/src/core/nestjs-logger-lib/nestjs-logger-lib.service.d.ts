import { Logger } from '@nestjs/common';
export declare class NestjsLoggerLibService extends Logger {
    log(message: string, trace: string): void;
    error(message: string, trace: string): void;
    warn(message: string): void;
    debug(message: string): void;
}
