import { ILoggingOptions, ILoggingCreateOption, ILog } from './interface';
import winston from 'winston';
export declare class NestjsWinstonLoggingLibService {
    private options;
    private loggerOptions;
    private loggingMap;
    constructor(options: ILoggingOptions);
    createLogger(options: winston.LoggerOptions): winston.Logger;
    createLoggerOptions({ level }: ILoggingCreateOption): winston.LoggerOptions;
    createLoggers(): winston.Logger[];
    log({ level, text }: ILog): any;
    test(): Promise<string>;
}
