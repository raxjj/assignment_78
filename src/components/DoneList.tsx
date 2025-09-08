
import DoneItem from "../DoneItem";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Props = {
  todos: Todo[];
};

export default function DoneList({ doneTodos, toggleTodo, removeTodo }: DoneListProps) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-2">Things done</h3>
      {doneTodos.length === 0 && (
        <p className="text-slate-500">No things done yet</p>
      )}
      <ul>
        {doneTodos.map((todo) => (
          <DoneItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  );
}
