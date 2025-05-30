import { useState } from "react";
import Input from "./Input";

type AddTasksProps = {
  onAddTaskSubmit: (title: string, description: string) => void;
};

function AddTasks({ onAddTaskSubmit }: AddTasksProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite a sua tarefa"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(event.target.value)
        }
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(event.target.value)
        }
      />
      <button
        onClick={() => {
          // Verifica se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha o título e a descrição da tarefa.");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600 transition-colors"
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTasks;
