const Task = require('../models/Task');

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = async (req, res) => {
  const { title, description, category, priority } = req.body;

  try {
    const task = await Task.create({
      user: req.user.id, // Access user from the protect middleware
      title,
      description,
      category,
      priority
    });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all user's tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get a single task by ID
// @route   GET /api/tasks/:id
// @access  Private
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
  const { title, description, category, priority, completed } = req.body;

  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.category = category || task.category;
    task.priority = priority || task.priority;
    task.completed = completed !== undefined ? completed : task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Task.findByIdAndDelete(req.params.id); // Or Task.deleteOne({_id: req.params.id, user: req.user.id})
res.status(204).send(); // 204 No Content - Best practice
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get basic task analytics
// @route   GET /api/tasks/analytics
// @access  Private
const getTaskAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;
    const totalTasks = await Task.countDocuments({ user: userId });
    const completedTasks = await Task.countDocuments({ user: userId, completed: true });
    const pendingTasks = totalTasks - completedTasks;
    const highPriorityTasks = await Task.countDocuments({ user: userId, priority: 'High' });

    res.json({
      totalTasks,
      completedTasks,
      pendingTasks,
      highPriorityTasks
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getTaskAnalytics
};
