import { DynamicModule } from '@nestjs/common';
import { ILoggingOptions } from './interface';
export declare class NestjsWinstonLoggintLibModule {
    static register(options: ILoggingOptions): DynamicModule;
}
