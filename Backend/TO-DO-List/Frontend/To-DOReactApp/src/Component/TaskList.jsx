import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/TaskServices';

const TaskList = ({ setEditableTask }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      try {
        await deleteTask(id);
        loadTasks();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: task.completed ? '#e0ffe0' : '#fff',
            }}
          >
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status: <strong>{task.completed ? 'Completed' : 'Incomplete'}</strong></p>
            <button onClick={() => setEditableTask(task)} style={{ marginRight: '10px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
