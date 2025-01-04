import React from 'react';

const TaskList = ({ tasks, setTasks }) => {

    const handleDelete = async (taskId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete task');
            }

            setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
        } catch (error) {
          console.error('Error deleting task:', error);
          // Showing an error message to the user here.
          alert("Error deleting task. Please try again.")
        }
    };

  if (!tasks) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <h4>Tasks</h4>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.title} - {task.description} - Priority: {task.priority}
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;