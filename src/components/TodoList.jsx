import React, { useState } from "react";
import todostyles from "./todolist.module.css";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if(task.trim() && date) {
      setTasks([...tasks, {name: task, date}]);
      setTask("");
      setDate("");
    }
  }

  const deleteTask = (index) => {
    const filteredTask = tasks.filter((_, i) => i !== index);
    setTasks(filteredTask);
  }

  return (
    <div style={{ padding: "1rem", width: "100%", justifyItems: 'center'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          fontSize: "28px",
        }}
      >
        <h2>To-Do List</h2>
      </div>

      <div style={{ display: 'flex' }}>
        <form onSubmit={addTask} method="post" >
          <input
            type="text"
            className={todostyles.taskInput}
            placeholder="Enter your Task Here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input type="date" className={todostyles.dateInput}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit" className={todostyles.submitBtn}>
            Submit
          </button>
        </form>
      </div>

      <div style={{ display: 'flex' }}>
        <table border='1px' className={todostyles.tasksTable}>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        
        {tasks.map((task, index) => (
          <tr>
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td>{task.date}</td>
          </tr>
        ))
        }
        
        </table>
      </div>
    </div>
  );
};

export default TodoList;
