import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NestjsWinstonLoggingLibService } from '../nestjs-winston-logging-lib';
import { NestjsLoggerLibService } from '../nestjs-logger-lib';
export declare class LoggingInterceptor implements NestInterceptor {
    private nestjsWinstonLoggingLibService;
    private nestjsLoggerLibService;
    constructor(nestjsWinstonLoggingLibService: NestjsWinstonLoggingLibService, nestjsLoggerLibService: NestjsLoggerLibService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
