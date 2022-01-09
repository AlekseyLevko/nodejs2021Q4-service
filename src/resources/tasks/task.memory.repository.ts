import { Task as TaskType } from '../../types';
import Task from './task.model';

const tasks: TaskType[] = [];

/**
 * Getting all task from DB
 * @param boardId - board id
 * @returns all tasks
 */
const getAllTasks = async (boardId: string) => {
  const promise = new Promise<TaskType[]>((resolve) => {
    setTimeout(() => {
      resolve(tasks.filter((task) => task.boardId === boardId));
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Getting task by id from DB
 * @param boardId - board id
 * @param taskId - task id
 * @returns task found by id
 */
const getTaskById = async (boardId: string, taskId: string) => {
  const promise = new Promise<TaskType | undefined>((resolve) => {
    setTimeout(() => {
      const task = tasks.find((item) => item.id === taskId);
      resolve(task);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Adding new task to DB
 * @param boardId - board id
 * @param task - data for creating new task
 * @returns
 */
const addTask = async (boardId: string, task: TaskType) => {
  const { title, order, description, userId, columnId } = task;
  const promise = new Promise<TaskType>((resolve) => {
    setTimeout(() => {
      const newTask = new Task({
        title,
        order,
        description,
        boardId,
        userId,
        columnId,
      });
      tasks.push(newTask);
      resolve(newTask);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Updating task by id in DB
 * @param boardId - board id
 * @param taskId - task id
 * @param updatedTask - new task data to update
 * @returns updated task
 */
const updateTask = async (
  boardId: string,
  taskId: string,
  updatedTask: TaskType
) => {
  const { title, order, description, userId, columnId } = updatedTask;
  const promise = new Promise<TaskType>((resolve) => {
    setTimeout(() => {
      const indexTask = tasks.findIndex((task) => task.id === taskId);
      tasks[indexTask] = {
        ...tasks[indexTask],
        boardId,
        title,
        order,
        description,
        userId,
        columnId,
      };
      resolve(tasks[indexTask]);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Deleting task from DB
 * @param id - task id
 * @returns index of deleted task
 */
const deleteTask = async (id: string) => {
  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      const indexTask = tasks.findIndex((task) => task.id === id);
      tasks.splice(indexTask, 1);

      resolve(indexTask);
    }, 20);
  });

  return promise.then((data) => data);
};

export const tasksRepo = {
  tasks,
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
