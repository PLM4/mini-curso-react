import { useEffect, useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./index.css";
import { v4 } from "uuid";
import Title from "./components/Title";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  isFinished: boolean;
}

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  // useEffect(() => {
  //   // Chamar dados de uma API
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     // Pegar os dados que ela retorna
  //     const data = await response.json();
  //     // Armazenar/persistir esses dados no estado
  //     setTasks(data);
  //   };
  //   fetchTasks();
  // }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTaskSubmit(title: string, description: string) {
    const newTask = {
      id: v4(),
      title,
      description,
      isFinished: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(id: string) {
    const newTasks = tasks.map((task: TaskProps) => {
      // Tarefa precisa ser atualizada
      if (task.id === id) {
        return { ...task, isFinished: !task.isFinished };
      }
      // Tarefa não precisa ser atualizada
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(id: string) {
    const newTasks = tasks.filter((task: TaskProps) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="min-w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de tarefas</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
