import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { Todo } from 'types';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  async getTodoList() {
    return this.todoService.getTodoList();
  }

  @Get('/:id')
  async getTodoById(@Param() id: Todo['id']) {
    return this.todoService.getTodoById(id);
  }

  @Post('/')
  async createTodo(@Body() { title }: { title: string }) {
    return this.todoService.createTodo(title);
  }

  @Delete('/id')
  async deleteTodoById(@Param() id: Todo['id']) {
    this.todoService.deleteTodoById(id);
  }

  @Put('/:id')
  async updateTodo(@Body() todo: Todo) {
    this.todoService.updateTodo(todo);
  }
}
