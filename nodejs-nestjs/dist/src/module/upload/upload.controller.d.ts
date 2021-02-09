import { UploadService } from './upload.service';
import { Job } from 'bull';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    upload(data: any): Promise<{
        job: Job;
        res: any;
    }>;
    uploadMore(data: any[]): Promise<Array<{
        job: Job;
        res: any;
    }>>;
}
