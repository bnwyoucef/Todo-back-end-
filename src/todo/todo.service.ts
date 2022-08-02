import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TodoDto, TodoUpdateDto } from './dto';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService){}

    async getTodo(userId:number) {
        const todo = await this.prisma.todo.findMany({
            where: {
                userId: userId
            }
        })
        return todo;
    }

    async createTodo(dto:TodoDto) {
        const newTodo = await this.prisma.todo.create({
            data: {
                title: dto.title,
                description: dto.description,
                userId: dto.userId
            }
        })
        return newTodo;
    }

    async updateTodo(dto:TodoUpdateDto) {
        const updatedTodo = await this.prisma.todo.update({
            where: {id: dto.id},    
            data : {
                completed: dto.completed
            }
        })
        return updatedTodo;
    }

    async deleteTodo(id:number) {
        const result = await this.prisma.todo.delete({
            where: {
                id: id,
            }
        })
        return result;
    }
    async clearAll() {
        await this.prisma.todo.deleteMany({});
        return;
    }
}
