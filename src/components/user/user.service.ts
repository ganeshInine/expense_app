import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){
    }

    async createUser(user:UserDto):Promise<User>{
       const userObj = await this.userRepository.create(user);
       return await this.userRepository.save(userObj); 
    }
    async updateUser(user:UserDto,id:number):Promise<User>{
        const userObj = await this.userRepository.findOne({where:{id:id}});
        
        userObj.email =user.email;
        userObj.name=user.name;
        userObj.phone=user.phone;

       return await this.userRepository.save(userObj);
    }
    async getUsers(){
        return this.userRepository.find();
    }
    async getUser(id:number){
        return this.userRepository.findOne({where:{id:id}});
    }

}
