import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store';

function Filter() {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onCreate = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      { id: 1, title, completed: false }
    ]);
    setTitle('');
  };

  return (
    <section className="todo-filter">
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={onCreate}>만들기</button>
    </section>
  );
}

export default Filter;
