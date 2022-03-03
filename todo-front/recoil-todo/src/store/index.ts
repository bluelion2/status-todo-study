import { atom, selector } from 'recoil';
import { Todo } from '../../../common/type';

export const TODO_LIST_KEY = 'todo-list-key';
const TODO_COUNT = 'todo-count';

export const todoListState = atom<Todo[]>({
  key: TODO_LIST_KEY,
  default: []
});

export const todoCount = selector({
  key: TODO_COUNT,
  get: ({ get }) => {
    const todoList = get(todoListState);
    return todoList.length;
  }
});
