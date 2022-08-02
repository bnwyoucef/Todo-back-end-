import { IsNotEmpty } from "class-validator";

export class TodoUpdateDto {
    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    completed: boolean;
}