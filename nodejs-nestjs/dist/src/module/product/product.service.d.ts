import { OnModuleInit } from '@nestjs/common';
import { NestjsMdbLibService } from '@smartblog/nestjs-mdb-lib';
import { NestjsRdbLibService } from '@smartblog/nestjs-rdb-lib';
import { Product } from 'src/entity/product.entity';
import { IServerResponse } from 'src/core/interface';
export declare class ProductService implements OnModuleInit {
    private nestjsMdbLibService;
    private nestjsRdbLibService;
    private colUser;
    constructor(nestjsMdbLibService: NestjsMdbLibService, nestjsRdbLibService: NestjsRdbLibService);
    onModuleInit(): void;
    init(): Promise<void>;
    getProducts(data: any): Promise<{
        list: any[];
        pagination: any;
    }>;
    addProduct(product: Product): Promise<IServerResponse<Product | null>>;
    getOffsetAndLimit(p?: {
        pageSize?: number;
        page?: number;
    }): {
        offset: number;
        limit: number;
    };
}
