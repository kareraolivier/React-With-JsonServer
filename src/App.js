import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
// import About from "./components/About";
import "./App.css";

const name = "tutorial";

const App = () => {
  //show addtask
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask();
      setTask(taskFromServer);
    };
    getTask();
  }, []);

  //Fetch tasks
  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/task");
    const data = await res.json();
    console.log(data);
    return data;
  };

  //Fetch single task
  const fetchSingleTask = async (id) => {
    const res = await fetch(`http://localhost:5000/task/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  //Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    // const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = await res.json();

    setTask((task) => [...task, newTask]);
  };

  //delete tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/task/${id}`, { method: "DELETE" });
    setTask(task.filter((data) => data.id !== id));
  };

  //reminders
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchSingleTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const newData = await res.json();
    setTask(
      task.map((data) =>
        data.id === id ? { ...data, reminder: newData.reminder } : data
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
      <AddTask onAdd={addTask} />
      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task left"
      )}

      <Footer />
    </div>
  );
};

export default App;
