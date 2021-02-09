import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(user: User): Promise<import("../../core/interface").IServerResponse<User>>;
}
