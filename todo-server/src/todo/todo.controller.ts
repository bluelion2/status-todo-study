import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { Todo } from 'src/entity/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  async getTodoList() {
    return this.todoService.getTodoList();
  }

  @Get('/:id')
  async getTodoById(@Param('id', ParseIntPipe) id: Todo['id']) {
    return this.todoService.getTodoById(id);
  }

  @Post('/')
  async createTodo(@Body() { title }: { title: string }) {
    return this.todoService.createTodo(title);
  }

  @Delete('/:id')
  async deleteTodoById(@Param('id', ParseIntPipe) id: Todo['id']) {
    return this.todoService.deleteTodoById(id);
  }

  @Put('/:id')
  async updateTodo(@Body() todo: Todo) {
    return this.todoService.updateTodo(todo);
  }
}
