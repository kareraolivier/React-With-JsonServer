import React from "react";
import Singletask from "./Singletask";
// const task = [
//   {
//     id: 1,
//     text: "karera",
//     age: "feb 4",
//     reminder: "true",
//   },
//   {
//     id: 2,
//     text: "susu",
//     age: "feb 1",
//     reminder: "true",
//   },
//   {
//     id: 3,
//     text: "deo",
//     age: "feb 7",
//     reminder: "false",
//   },
//   {
//     id: 4,
//     text: "dan",
//     age: "feb 5",
//     reminder: "true",
//   },
// ];

const Task = ({ task, onDelete, onToggle }) => {
  console.log(task);
  return (
    <div>
      {task.map((data, index) => (
        <Singletask
          key={index}
          singletask={data}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Task;
