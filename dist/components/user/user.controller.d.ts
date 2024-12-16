import { UserService } from './user.service';
import User from './user.entity';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(id: number): Promise<User>;
    getUserList(): Promise<User[]>;
    createUser(user: UserDto): Promise<User>;
    updateUser(user: UserDto, id: number): Promise<User>;
}
