import { observer } from 'mobx-react';
import { Todo } from '../../../common/type';
import store from '../store/store';

type Props = {
  todo: Todo;
};

function Row({ todo }: Props) {
  const deleteTodo = () => {
    const ok = confirm('정말 지우시는건가요?');
    if (ok) {
      store.deleteTodo(todo.id);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          store.updateTodo({ ...todo, completed: !todo.completed })
        }
      />
      <p>{todo.title}</p>
      <button onClick={() => deleteTodo()}>삭제!</button>
    </li>
  );
}

export default observer(Row);
