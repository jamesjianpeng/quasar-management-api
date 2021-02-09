import { NestjsMdbLibService } from '@smartblog/nestjs-mdb-lib';
import { IAddOpt } from './interface';
import { Queue, Job } from 'bull';
export declare class UploadService {
    private nestjsMdbLibService;
    private uploadFileQueue;
    constructor(nestjsMdbLibService: NestjsMdbLibService, uploadFileQueue: Queue);
    add({ name, data, options }: IAddOpt): Promise<Job>;
    test(): Promise<{
        hk: any[];
        sz: any[];
    }>;
    addMongoData(options: any): Promise<any>;
    upload(data: any): Promise<{
        job: Job;
        res: any;
    }>;
    uploadMore(data: any[]): Promise<Array<{
        job: Job;
        res: any;
    }>>;
}
