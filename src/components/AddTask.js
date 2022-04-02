import React from "react";

const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Tasks</label>
        <input type="text" placeholder="Add task"></input>
      </div>
      <div className="form-control">
        <label>Ages & time</label>
        <input type="text" placeholder="Add age and time"></input>
      </div>
      <div className="form-control form-control-check">
        <label>set reminders</label>
        <input type="checkbox"></input>
      </div>
      <input type="submit" value="save tasks" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
