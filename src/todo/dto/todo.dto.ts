import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class TodoDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    completed: boolean;
    
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}