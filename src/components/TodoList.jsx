import React, { useState } from "react";
import todostyles from "./todolist.module.css";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  // For Edit Functionality States
  const [editIndex, setEditIndex] = useState(-1);
  const [editTask, setEditTask] = useState('');
  const [editDate, setEditDate] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if(task.trim() && date) {
      setTasks([...tasks, {name: task, date}]);
      setTask("");
      setDate("");
    }
  }

  const deleteTask = (index) => {
    const filteredTask = tasks.filter((currentValue, currentIndex) => currentIndex !== index);
    setTasks(filteredTask);
  }

  const startEdit = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index].name);
    setEditDate(tasks[index].date);
  }

  const saveEdit = () => {
    const updatedTasks = tasks.map((task, index) => 
      index === editIndex ? {name: editTask, date: editDate} : task
    );
    setTasks(updatedTasks);
    setEditIndex(-1);
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
            value={editTask==0 ? task : editTask}
            onChange={(e) => setTask(e.target.value)}
          />
          <input type="date" className={todostyles.dateInput}
          value={editDate==0 ? date : editDate}
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
            <th colSpan={2}>Action</th>
          </tr>
        
        {tasks.map((task, index) => (
          <tr>
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td>{task.date}</td>
            <td>
              <button onClick={() => deleteTask(index)} className={todostyles.deleteBtn}>Delete</button>
            </td>
            <td>
              <button onClick={() => startEdit(index)} className={todostyles.updateBtn}>Update</button>
            </td>
          </tr>
        ))
        }
        
        </table>
      </div>
    </div>
  );
};

export default TodoList;
