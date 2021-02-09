import { NestjsMdbLibService } from '@smartblog/nestjs-mdb-lib';
import { NestjsLoggerLibService } from './core/nestjs-logger-lib';
import { NestjsRdbLibService } from '@smartblog/nestjs-rdb-lib';
export declare class AppService {
    private nestjsMdbLibService;
    private nestjsRdbLibService;
    private nestjsLoggerLibService;
    constructor(nestjsMdbLibService: NestjsMdbLibService, nestjsRdbLibService: NestjsRdbLibService, nestjsLoggerLibService: NestjsLoggerLibService);
    test(): Promise<{
        hk: any[];
        redis2Value: any;
        sz: any[];
    }>;
    getHello(): Promise<string>;
    testLib(): Promise<string>;
    testMdb(): Promise<{
        hk: any[];
        redis2Value: any;
        sz: any[];
    }>;
}
