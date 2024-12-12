import { IsEmpty, IsNumber, IsString } from "class-validator";

export class UserDto{
    
    @IsString()
    @IsEmpty()
    name:string;

    @IsEmpty()
    @IsString()
    email:string;

    @IsNumber()
    phone:number

}