import React from "react";
import { FaTimes } from "react-icons/fa";

const Singletask = ({ singletask, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${singletask.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(singletask.id)}
    >
      <h3>
        {singletask.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(singletask.id)}
        />
      </h3>
      <p>{singletask.age}</p>
    </div>
  );
};

export default Singletask;
