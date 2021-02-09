import { LoginService } from './login.service';
import { User } from 'src/entity/user.entity';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(user: User): Promise<import("../../core/interface").IServerResponse<null>>;
    testMdb(): Promise<string>;
    register(user: User): Promise<import("../../core/interface").IServerResponse<User>>;
}
