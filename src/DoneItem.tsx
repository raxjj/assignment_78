

// interface DoneItemProps {
//   todo: Todo;
//   toggleTodo: (id: number, done: boolean) => void;
//   removeTodo: (id: number) => void;
// }

// export default function DoneItem({ todo, toggleTodo, removeTodo }: DoneItemProps) {
//   return (
//     <li className="mb-1 flex items-center justify-between space-x-3">
//       <div className="flex items-center space-x-3">
//         <input
//           type="checkbox"
//           id={`done-${todo.id}`}
//           className="rounded border-yellow-500 text-yellow-500 focus:ring-yellow-500"
//           checked={todo.done}
//           onChange={() => toggleTodo(todo.id, todo.done)}
//         />
//         <label htmlFor={`done-${todo.id}`} className="text-yellow-700 select-text">
//           {todo.text}
//         </label>
//       </div>
//       <button
//         onClick={() => removeTodo(todo.id)}
//         className="text-red-500 hover:text-red-700 font-semibold"
//       >
//         Remove
//       </button>
//     </li>
//   );
// }


import type { Todo } from "./types";

interface DoneItemProps {
  todo: Todo;
  toggleTodo: (id: number, done: boolean) => void;
  removeTodo: (id: number) => void;
}

export default function DoneItem({ todo, toggleTodo, removeTodo }: DoneItemProps) {
  return (
    <li className="mb-1 flex items-center justify-between space-x-3">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id={`done-${todo.id}`}
          className="rounded border-yellow-500 text-yellow-500 focus:ring-yellow-500"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id, todo.done)}
        />
        <label htmlFor={`done-${todo.id}`} className="text-yellow-700 select-text">
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        Remove
      </button>
    </li>
  );
}
