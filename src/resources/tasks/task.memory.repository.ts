import { Task as TaskType } from '../../types';
import Task from './task.model';

const tasks: TaskType[] = [];

const getAllTasks = async (boardId: string) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks.filter((task) => task.boardId === boardId));
    }, 20);
  });

  return promise.then((data) => data);
};

const getTaskById = async (boardId: string, taskId: string) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const task = tasks.find((item) => item.id === taskId);
      resolve(task);
    }, 20);
  });

  return promise.then((data) => data);
};

const addTask = async (
  boardId: string,
  { title, order, description, userId, columnId }: TaskType
) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const task = new Task({
        title,
        order,
        description,
        boardId,
        userId,
        columnId,
      });
      tasks.push(task);
      resolve(task);
    }, 20);
  });

  return promise.then((data) => data);
};

const updateTask = async (
  boardId: string,
  taskId: string,
  { title, order, description, userId, columnId }: TaskType
) => {
  const promise = new Promise((resolve) => {
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

const deleteTask = async (id: string) => {
  const promise = new Promise((resolve) => {
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
