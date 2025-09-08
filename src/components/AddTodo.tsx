import { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [adding, setAdding] = useState<boolean>(false);
  const [newTodoText, setNewTodoText] = useState<string>("");

  const onSave = () => {
    if (newTodoText.trim() === "") return;
    addTodo(newTodoText.trim());
    setNewTodoText("");
    setAdding(false);
  };

  const onCancel = () => {
    setNewTodoText("");
    setAdding(false);
  };

  return (
    <section className="border border-slate-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-3">Create a todo</h3>
      {!adding ? (
        <button
          onClick={() => setAdding(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold shadow"
        >
          Add todo
        </button>
      ) : (
        <>
          <input
            type="text"
            autoFocus
            placeholder="Write an article about XState"
            className="w-full border border-slate-300 rounded-md px-4 py-2 mb-4 text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSave();
              if (e.key === "Escape") onCancel();
            }}
          />
          <div className="flex space-x-4">
            <button
              onClick={onSave}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold shadow"
            >
              Save
            </button>
            <button
              onClick={onCancel}
              className="border border-slate-300 bg-white hover:bg-slate-100 px-4 py-2 rounded-md font-semibold shadow"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </section>
  );
}
