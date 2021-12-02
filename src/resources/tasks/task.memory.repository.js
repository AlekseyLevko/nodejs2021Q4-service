const Task = require('./task.model');

const tasks = [];

const getAllTasks = async (boardId) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks.filter((task) => task.boardId === boardId));
    }, 20);
  });

  return promise.then((data) => data);
};

const getTaskById = async (boardId, taskId) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const task = tasks.find((item) => item.id === taskId);
      resolve(task);
    }, 20);
  });

  return promise.then((data) => data);
};

const addTask = async (
  boardId,
  { title, order, description, userId, columnId }
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
  boardId,
  taskId,
  { title, order, description, userId, columnId }
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

const deleteTask = async (id) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const indexTask = tasks.findIndex((task) => task.id === id);
      tasks.splice(indexTask, 1);

      resolve(indexTask);
    }, 20);
  });

  return promise.then((data) => data);
};

module.exports = {
  tasks,
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
