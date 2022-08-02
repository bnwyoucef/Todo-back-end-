import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TodoDto, TodoUpdateDto } from './dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService) {}

    @Get('all')
    getTodo(@Body() rec:any) {
        console.log(rec.userId);
        return this.todoService.getTodo(rec.userId);
    }

    @Post('create')
    createTodo(@Body() dto:TodoDto) {
        console.log(dto);
        
        return this.todoService.createTodo(dto);
    }
    @Patch('update')
    updateTodo(@Body() dto:TodoUpdateDto) {
        return this.todoService.updateTodo(dto);
    }
    @Post('delete')
    deleteToDo(@Body() obj:any) {
        return this.todoService.deleteTodo(obj.id)
    }
    @Post('clear')
    clearAll() {
        this.todoService.clearAll();
    }
}
