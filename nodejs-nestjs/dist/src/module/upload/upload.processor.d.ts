import { Job } from 'bull';
import { NestjsMdbLibService } from '@smartblog/nestjs-mdb-lib';
export declare class UploadProcessor {
    private nestjsMdbLibService;
    constructor(nestjsMdbLibService: NestjsMdbLibService);
    queueHandleUpload(job: Job): Promise<any>;
    onQueueProgress(job: Job, progress: number): void;
    onQueueStalled(job: Job): void;
    onQueueWaiting(job: Job): void;
    onQueueActive(job: Job): void;
    onQueueCompleted(job: Job): void;
    onQueueFailed(job: Job, error: Error): void;
    onQueueError(error: Error): void;
    upload(data: any, count?: number, finishCount?: number): Promise<any>;
}
