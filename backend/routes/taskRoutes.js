const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getTaskAnalytics
} = require('../controllers/taskController');

router.route('/').post(protect, createTask).get(protect, getTasks);
router.route('/:id')
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);
router.get('/analytics', protect, getTaskAnalytics);

module.exports = router;
