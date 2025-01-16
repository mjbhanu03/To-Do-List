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

    const saveEdit = (e) => {
      e.preventDefault();
      const updatedTasks = tasks.map((task, index) => 
        index === editIndex ? {name: editTask, date: editDate} : task
      );
      setTasks(updatedTasks);
      setEditIndex(-1);
      setEditTask('');
      setEditDate('');
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
          <form onSubmit={ editIndex === -1 ? addTask : saveEdit} method="post" >
            <input
              type="text"
              className={todostyles.taskInput}
              placeholder="Enter your Task Here"
              value={editIndex === -1 ? task : editTask}
              onChange={(e) => editIndex === -1 ? setTask(e.target.value) : setEditTask(e.target.value)}
            />
            <input type="date" className={todostyles.dateInput}
            value={editIndex === -1 ? date : editDate}
            onChange={(e) => editIndex === -1 ? setDate(e.target.value) : setEditDate(e.target.value)}
            />
            <button type="submit" className={todostyles.submitBtn} >
              {editIndex === -1 ? 'Submit' : 'Save'}
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
