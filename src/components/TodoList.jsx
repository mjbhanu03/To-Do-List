import React, {useState} from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState();
  const [task, setTask] = useState();

  return (
    <div style={{ padding: '1rem' }}>
      <h2>To-Do List</h2>
    </div>
  );
};