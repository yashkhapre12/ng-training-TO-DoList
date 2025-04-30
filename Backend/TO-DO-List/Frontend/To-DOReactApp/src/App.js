import React, { useState } from 'react';
import TaskForm from './Component/TaskForm';
import TaskList from './Component/TaskList';

function App() {
  const [editableTask, setEditableTask] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <TaskForm
        editableTask={editableTask}
        setEditableTask={setEditableTask}
        refreshTasks={triggerRefresh}
      />
      <TaskList
        setEditableTask={setEditableTask}
        refresh={refresh}
      />
    </div>
  );
}

export default App;
