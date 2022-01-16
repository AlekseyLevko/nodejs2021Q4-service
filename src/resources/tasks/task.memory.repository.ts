import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Board } from '../boards/board.entity';
import { Task as TaskEntity } from './task.entity';

/**
 * Getting all task from DB
 * @param boardId - board id
 * @returns all tasks
 */

const getAllTasks = async (boardId: string) =>
  (await getRepository(TaskEntity).find()).filter(
    (task) => task.boardId === boardId
  );

/**
 * Getting task by id from DB
 * @param id - task id
 * @returns task found by id
 */
const getTaskById = async (id: string) => getRepository(TaskEntity).findOne(id);

/**
 * Adding new task to DB
 * @param boardId - board id
 * @param task - data for creating new task
 * @returns
 */
const addTask = async (boardId: string, task: TaskEntity) => {
  const taskRepository = getRepository(TaskEntity);
  const newTask = taskRepository.create({ ...task, boardId, id: uuid() });
  newTask.board = await getRepository(Board).findOne(boardId);
  return taskRepository.save(newTask);
};

/**
 * Updating task by id in DB
 * @param taskId - task id
 * @param updatedTask - new task data to update
 * @returns updated task
 */
const updateTask = async (taskId: string, updatedTask: TaskEntity) => {
  const taskRepository = getRepository(TaskEntity);
  const task = await taskRepository.findOne(taskId);
  if (task) {
    taskRepository.merge(task, updatedTask);
    await taskRepository.save(task);
  }
  return task;
};

/**
 * Deleting task from DB
 * @param id - task id
 * @returns index of deleted task
 */
const deleteTask = async (id: string) => {
  const results = await getRepository(TaskEntity).delete(id);
  return Number(results.affected);
};

export const tasksRepo = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
