import User from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: UserDto): Promise<User>;
    updateUser(user: UserDto, id: number): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
}
