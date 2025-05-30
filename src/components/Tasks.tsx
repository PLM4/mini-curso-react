import { ChevronsRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

type Task = {
  id: string;
  title: string;
  description: string;
  isFinished: boolean;
};

type TasksProps = {
  tasks: Task[];
  onTaskClick: (id: string) => void;
  onDeleteTaskClick: (id: string) => void;
};

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }: TasksProps) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task: Task) {
    const queryString = new URLSearchParams();
    queryString.set("title", task.title);
    queryString.set("description", task.description);
    navigate(`/task?${queryString.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task: Task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              task.isFinished && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronsRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
