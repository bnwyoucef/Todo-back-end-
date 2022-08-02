import { IsEmail, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsString()
    @IsOptional()
    userName: string;
}