import { OnModuleInit } from '@nestjs/common';
import { NestjsMdbLibService } from '@smartblog/nestjs-mdb-lib';
import { NestjsRdbLibService } from '@smartblog/nestjs-rdb-lib';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/module/user/user.service';
import { IServerResponse } from 'src/core/interface';
import { EventsGateway } from 'src/core/nestjs-websocket-lib/events.gateway';
export declare class LoginService implements OnModuleInit {
    private nestjsMdbLibService;
    private nestjsRdbLibService;
    private userService;
    private eventsGateway;
    private colUser;
    constructor(nestjsMdbLibService: NestjsMdbLibService, nestjsRdbLibService: NestjsRdbLibService, userService: UserService, eventsGateway: EventsGateway);
    onModuleInit(): void;
    init(): Promise<void>;
    login(user: User): Promise<IServerResponse<null>>;
    logout(): Promise<string>;
    register(user: User): Promise<IServerResponse<User | null>>;
    protected decryptPassword(password: string): Promise<string>;
    protected hashPassword(password: string): Promise<string>;
}
