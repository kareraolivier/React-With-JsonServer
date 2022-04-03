import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [age, setAges] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("pls add task");
      return;
    }

    onAdd({ text, age, reminder });

    setText("");
    setAges("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tasks</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Ages & time</label>
        <input
          type="text"
          placeholder="Add age and time"
          value={age}
          onChange={(e) => setAges(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>set reminders</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="save tasks" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
