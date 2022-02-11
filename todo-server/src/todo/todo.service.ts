import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'types';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository) private todoRepository: TodoRepository,
  ) {}

  async getTodoList() {
    return this.todoRepository.find();
  }

  async getTodoById(id: Todo['id']) {
    const target = await this.todoRepository.findOne(id);

    if (!target) {
      throw new NotFoundException(`대상 Todo가 없습니다 - id : ${id}`);
    }

    return target;
  }

  async createTodo(title: string) {
    const newTodo = this.todoRepository.create({
      title,
      completed: false,
    });
    await this.todoRepository.save(newTodo);
    return newTodo;
  }

  async deleteTodoById(id: Todo['id']) {
    await this.todoRepository.delete(id);
  }

  async updateTodo(todo: Todo) {
    const target = await this.getTodoById(todo.id);
    if (!target) {
      throw new NotFoundException(
        `대상 TODO가 없습니다. title - ${todo.title} / id - ${todo.id}`,
      );
    }

    const fixedTodo = { ...target, ...todo };
    await this.todoRepository.save(fixedTodo);
    return fixedTodo;
  }
}
