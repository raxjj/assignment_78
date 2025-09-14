

// interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }

// type Props = {
//   todo: Todo;
//   toggleTodo: (id: number) => void;
//   removeTodo: (id: number) => void;
// };

// export default function TodoItem({ todo, toggleTodo, removeTodo }: TodoItemProps) {
//   return (
//     <li className="mb-1 flex items-center justify-between space-x-3">
//       <div className="flex items-center space-x-3">
//         <input
//           type="checkbox"
//           id={`todo-${todo.id}`}
//           className="rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
//           checked={todo.done}
//           onChange={() => toggleTodo(todo.id, todo.done)}
//         />
//         <label htmlFor={`todo-${todo.id}`} className="text-slate-700">
//           {todo.text}
//         </label>
//       </div>
//       {removeTodo && (
//         <button
//           onClick={() => removeTodo(todo.id)}
//           className="text-red-500 hover:text-red-700 font-semibold"
//         >
//           Remove
//         </button>
//       )}
//     </li>
//   );
// }


import type { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number, done: boolean) => void;
  removeTodo?: (id: number) => void;  // optional for safety
}

export default function TodoItem({ todo, toggleTodo, removeTodo }: TodoItemProps) {
  return (
    <li className="mb-1 flex items-center justify-between space-x-3">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          className="rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id, todo.done)}
        />
        <label htmlFor={`todo-${todo.id}`} className="text-slate-700">
          {todo.text}
        </label>
      </div>
      {removeTodo && (
        <button
          onClick={() => removeTodo(todo.id)}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Remove
        </button>
      )}
    </li>
  );
}
