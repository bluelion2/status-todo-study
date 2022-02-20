import { makeAutoObservable, runInAction } from 'mobx';
import { util } from '../utils/utils';
import { Todo } from '../../../common/type';

class Store {
  todoList: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchTodoList() {
    const { data } = await util.getTodoList();
    runInAction(() => {
      this.todoList = data;
    });
  }

  async createTodo(title: string) {
    const { data } = await util.createTodo({ title });
    runInAction(() => {
      this.todoList = [...this.todoList, data];
    });
  }

  async updateTodo(data: Todo) {
    await util.updateTodo(data);
    const todoList = this.todoList.map(todo => {
      if (todo.id === data.id) {
        return data;
      }
      return todo;
    });

    runInAction(() => {
      this.todoList = todoList;
    });
  }

  async deleteTodo(id: Todo['id']) {
    await util.deleteTodoById(id);
    const todoList = this.todoList.filter(todo => todo.id !== id);

    runInAction(() => {
      this.todoList = todoList;
    });
  }
}

const store = new Store();

export default store;
