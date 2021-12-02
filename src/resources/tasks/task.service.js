const tasksRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);

const getTaskById = (boardId, taskId) => tasksRepo.getTaskById(boardId, taskId);

const addTask = (boardId, task) => tasksRepo.addTask(boardId, task);

const updateTask = (boardId, taskId, task) =>
  tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
