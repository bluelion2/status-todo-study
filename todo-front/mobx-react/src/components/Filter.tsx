import { observer } from 'mobx-react';
import React, { useState } from 'react';
import store from '../store/store';

function Filter() {
  const [title, setTitle] = useState('');

  const createTodo = () => {
    store.createTodo(title);
    setTitle('');
  };

  return (
    <section className="todo-filter">
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={createTodo}>만들기</button>
    </section>
  );
}

export default observer(Filter);
