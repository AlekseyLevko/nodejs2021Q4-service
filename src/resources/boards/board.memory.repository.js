const Board = require('./board.model');
const { getAllTasks, deleteTask } = require('../tasks/task.memory.repository');

const boards = [];

const getAllBoards = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(boards);
    }, 20);
  });

  return promise.then((data) => data);
};

const getBoardById = async (id) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const board = boards.find((item) => item.id === id);
      resolve(board);
    }, 20);
  });

  return promise.then((data) => data);
};

const addBoard = async ({ title, columns }) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const board = new Board({ title, columns });
      boards.push(board);
      resolve(board);
    }, 20);
  });

  return promise.then((data) => data);
};

const updateBoard = async (id, { title, columns }) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const indexBoard = boards.findIndex((board) => board.id === id);
      boards[indexBoard] = { ...boards[indexBoard], title, columns };
      resolve(boards[indexBoard]);
    }, 20);
  });

  return promise.then((data) => data);
};

const deleteBoard = async (id) => {
  const promise = new Promise((resolve) => {
    setTimeout(async () => {
      const indexBoard = boards.findIndex((board) => board.id === id);
      boards.splice(indexBoard, 1);
      const tasks = await getAllTasks(id);
      tasks.forEach((task) => task.boardId === id && deleteTask(task.id));
      resolve(indexBoard);
    }, 20);
  });

  return promise.then((data) => data);
};

module.exports = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
