import { Task } from '../../types';
import { tasksRepo } from './task.memory.repository';

/**
 * Service for getting all tasks
 * @param boardId - board id
 * @returns all tasks
 */
const getAllTasks = (boardId: string): Promise<Task[]> =>
  tasksRepo.getAllTasks(boardId);

/**
 * Service for getting task by id
 * @param boardId - board id
 * @param taskId - task id
 * @returns task found by id
 */
const getTaskById = (
  boardId: string,
  taskId: string
): Promise<Task | undefined> => tasksRepo.getTaskById(boardId, taskId);

/**
 * Service for adding new task
 * @param boardId - board id
 * @param task - data for creating new task
 * @returns created task
 */
const addTask = (boardId: string, task: Task): Promise<Task> =>
  tasksRepo.addTask(boardId, task);

/**
 * Service for updating task by id
 * @param boardId - board id
 * @param taskId - task id
 * @param task - new task data to update
 * @returns updated task
 */
const updateTask = (
  boardId: string,
  taskId: string,
  task: Task
): Promise<Task> => tasksRepo.updateTask(boardId, taskId, task);

/**
 * Service for deleting task by id
 * @param taskId - task id
 * @returns index of deleted task
 */
const deleteTask = (taskId: string): Promise<number> =>
  tasksRepo.deleteTask(taskId);

export const taskService = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
