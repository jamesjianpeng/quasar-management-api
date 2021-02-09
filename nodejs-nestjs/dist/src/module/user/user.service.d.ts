import { OnModuleInit } from '@nestjs/common';
import { NestjsMdbLibService } from '@smartblog/nestjs-mdb-lib';
import { NestjsRdbLibService } from '@smartblog/nestjs-rdb-lib';
import { User } from 'src/entity/user.entity';
import { IServerResponse } from 'src/core/interface';
export declare class UserService implements OnModuleInit {
    private nestjsMdbLibService;
    private nestjsRdbLibService;
    private colUser;
    constructor(nestjsMdbLibService: NestjsMdbLibService, nestjsRdbLibService: NestjsRdbLibService);
    onModuleInit(): void;
    init(): Promise<void>;
    getUser(user: User): Promise<IServerResponse<User | null>>;
    addUser(user: User): Promise<IServerResponse<User | null>>;
}
