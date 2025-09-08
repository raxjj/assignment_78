
import TodoItem from "../TodoItem";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};


export default function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold mb-2">Things to do</h3>
      {todos.length === 0 && (
        <p className="text-slate-500 mb-3">No things to do</p>
      )}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </section>
  );
}
