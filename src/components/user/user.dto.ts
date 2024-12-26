import { IsEmpty, IsNumber, IsPhoneNumber, isPhoneNumber, IsString } from "class-validator";

export class UserDto{
    
    @IsString()
    @IsEmpty()
    name:string;

    @IsEmpty()
    @IsString()
    email:string;

    @IsNumber()
    @IsPhoneNumber()
    phone:number

}