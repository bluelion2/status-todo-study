import React from 'react';
import { useRecoilValue } from 'recoil';
import '../../common/css/index.css';
import Filter from './components/Filter';
import Row from './components/Row';
import { todoCount, todoListState } from './store';

const App = () => {
  const list = useRecoilValue(todoListState);
  const count = useRecoilValue(todoCount);

  return (
    <main className="app">
      <div>
        <Filter />
        <p>{count}</p>
        <ul className="todo-table">
          {list.map(todo => {
            return <Row key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default App;
