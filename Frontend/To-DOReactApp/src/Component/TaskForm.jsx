import React, { useEffect, useState } from 'react';
import { addTask, updateTask } from '../services/TaskServices';

const TaskForm = ({ editableTask, setEditableTask, refreshTasks }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false,
  });

  useEffect(() => {
    if (editableTask) {
      setTask(editableTask);
    } else {
      setTask({ title: '', description: '', completed: false });
    }
  }, [editableTask]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.id) {
      await updateTask(task.id, task);
    } else {
      await addTask(task);
    }
    setTask({ title: '', description: '', completed: false });
    setEditableTask(null);
    refreshTasks(); // reload tasks in parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task.id ? 'Edit Task' : 'Add Task'}</h2>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <br />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <br />
      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={task.completed}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">{task.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
