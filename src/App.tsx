import { useState } from "react";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import AddTodo from "./components/AddTodo";


export default function App() {


  interface Todo {
  id: number;
  text: string;
  done: boolean;
}



  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneTodos, setDoneTodos] = useState<Todo[]>([]);

  const toggleTodo = (id: number, doneStatus: boolean) => {
    if (doneStatus) {
      const item = doneTodos.find((t) => t.id === id);
      if (!item) return;
      setDoneTodos(doneTodos.filter((t) => t.id !== id));
      setTodos([{ ...item, done: false }, ...todos]);
    } else {
      const item = todos.find((t) => t.id === id);
      if (!item) return;
      setTodos(todos.filter((t) => t.id !== id));
      setDoneTodos([{ ...item, done: true }, ...doneTodos]);
    }
  };

  const addTodo = (text: string) => {
    const newItem: Todo = { id: Date.now(), text, done: false };
    setTodos([newItem, ...todos]);
  };

  const removeTodo = (id: number) => {
    setDoneTodos(doneTodos.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header>
        <h1 className="text-xl font-semibold mb-8">XTodo</h1>
      </header>

      <section className="flex justify-between mb-6 items-start">
        <h2 className="text-3xl font-extrabold tracking-tight leading-none">
          Things to get done
        </h2>
      </section>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
      <DoneList doneTodos={doneTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
