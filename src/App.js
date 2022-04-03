import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import React, { useState } from "react";
import "./App.css";

const name = "tutorial";

const App = () => {
  //show addtask
  const [showAddTask, setShowAddTask] = useState(false);

  const [task, setTask] = useState([
    {
      id: 1,
      text: "karera",
      age: "feb 4",
      reminder: true,
    },
    {
      id: 2,
      text: "susu",
      age: "feb 1",
      reminder: true,
    },
    {
      id: 3,
      text: "deo",
      age: "feb 7",
      reminder: false,
    },
    {
      id: 4,
      text: "dan",
      age: "feb 5",
      reminder: true,
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    console.log(newTask);
    setTask((task) => [...task, newTask]);
  };

  //delete tasks
  const deleteTask = (id) => {
    setTask(task.filter((data) => data.id !== id));
  };

  //reminders
  const toggleReminder = (id) => {
    setTask(
      task.map((data) =>
        data.id === id ? { ...data, reminder: !data.reminder } : data
      )
    );
  };

  return (
    <div className="container">
      <h1>start {name}</h1>
      <Header
        title="reactApp"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task left"
      )}
    </div>
  );
};

export default App;
