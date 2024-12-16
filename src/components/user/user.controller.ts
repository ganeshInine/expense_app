import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import User from './user.entity';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){

    }
    @Get('getUser')
    async getUser(id:number):Promise<User>{
        return this.userService.getUser(id);
    }
    @Get('getUsers')
    async getUserList():Promise<User[]>{
        return this.userService.getUsers();
    }
    @Post('createUser')
    async createUser(@Body() user:UserDto):Promise<User>{
        return this.userService.createUser(user);
    }
    @Put('updatedUser/:id')
    async updateUser(@Body() user:UserDto,@Param(':id') id:number):Promise<User>{
        return this.userService.updateUser(user,id);
    }
}

