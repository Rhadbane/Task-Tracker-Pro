import React, { useState } from 'react';

const TaskForm = ({ onTaskCreate }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create task');
      }

      const newTask = await response.json();
      onTaskCreate(newTask);

      setTaskData({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium',
      });
      setIsFormVisible(false);
      setError('');
    } catch (error) {
      console.error('Error creating task:', error);
      setError(error.message || 'Failed to connect to the server.');
    }
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    setError('');
  };

  return (
    <div className="task-form-container">
      {!isFormVisible ? (
        <button className="add-task-button" onClick={toggleForm}>
          <span className="plus-icon">+</span>
          Add New Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-header">
            <h3>Add New Task</h3>
            <button type="button" className="close-button" onClick={toggleForm}>
              ×
            </button>
          </div>

          {error && (
            <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              required
              placeholder="Enter task title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={taskData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="3"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={taskData.dueDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Create Task
            </button>
            <button type="button" className="cancel-button" onClick={toggleForm}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;