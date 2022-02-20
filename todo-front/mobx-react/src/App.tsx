import { observer } from 'mobx-react';
import { useEffect } from 'react';
import Filter from './components/Filter';
import '../../common/css/index.css';
import store from './store/store';
import Row from './components/Row';

function App() {
  useEffect(() => {
    store.fetchTodoList();
  }, []);

  return (
    <main className="app">
      <div>
        <Filter />
        <ul className="todo-table">
          {store.todoList.map(todo => {
            return <Row key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default observer(App);
