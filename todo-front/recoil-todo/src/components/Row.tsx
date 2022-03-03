import { Todo } from '../../../common/type';
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store';

type Props = {
  todo: Todo;
};

function Row({ todo }: Props) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(listItem => listItem === todo);

  const onDelete = () => {
    const ok = confirm('정말 지우시는건가요?');
    if (ok) {
      console.log('delete');
      const newList = removeItemAtIndex(todoList, index);
      setTodoList(newList);
    }
  };

  const onUpdateTodo = () => {
    console.log('onUpdate');
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      completed: !todo.completed
    });
    setTodoList(newList);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={onUpdateTodo} />
      <p>{todo.title}</p>
      <button onClick={onDelete}>삭제!</button>
    </li>
  );
}

export default Row;

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
