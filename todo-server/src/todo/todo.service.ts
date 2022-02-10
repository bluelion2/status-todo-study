import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from 'types';

@Injectable()
export class TodoService {
  todoList: Todo[] = [];

  getTodoList() {
    return this.todoList;
  }

  getTodoById(id: Todo['id']) {
    const target = this.todoList.find((todo) => todo.id === id);

    if (!target) {
      throw new NotFoundException(`대상 Todo가 없습니다 - id : ${id}`);
    }

    return target;
  }

  async createTodo(title: string) {
    const newId = this.createTodoId();
    const newTodo = { title, id: newId, completed: false };
    this.todoList.push(newTodo);
    return newTodo;
  }

  async deleteTodoById(id: Todo['id']) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  async updateTodo(todo: Todo) {
    const targetIndex = this.todoList.findIndex(({ id }) => todo.id === id);

    if (!targetIndex) {
      throw new NotFoundException(
        `대상 TODO가 없습니다. title - ${todo.title} / id - ${todo.id}`,
      );
    }

    this.todoList[targetIndex] = todo;
  }

  private createTodoId() {
    const IdList = [...this.todoList.map(({ id }) => id)];

    const maxId = Math.max() || 0;
    console.log('maxid', maxId);
    return maxId + 1;
  }
}
