import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../entity/todo.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
