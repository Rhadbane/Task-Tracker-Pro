import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/tasks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch tasks');
        }

        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskCreate = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Taskform and Tasklist*/}
      <TaskForm onTaskCreate={handleTaskCreate} /> {/* Only one TaskForm */}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Dashboard;