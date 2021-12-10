import { Task } from '../../types';

const tasksRepo = require('./task.memory.repository');

const getAllTasks = (boardId: string) => tasksRepo.getAllTasks(boardId);

const getTaskById = (boardId: string, taskId: string) =>
  tasksRepo.getTaskById(boardId, taskId);

const addTask = (boardId: string, task: Task) =>
  tasksRepo.addTask(boardId, task);

const updateTask = (boardId: string, taskId: string, task: Task) =>
  tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = (taskId: string) => tasksRepo.deleteTask(taskId);

export const taskService = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
