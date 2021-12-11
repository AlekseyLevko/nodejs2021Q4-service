import { Board as BoardType } from '../../types';
import { tasksRepo } from '../tasks/task.memory.repository';
import Board from './board.model';

const boards: BoardType[] = [];

const getAllBoards = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(boards);
    }, 20);
  });

  return promise.then((data) => data);
};

const getBoardById = async (id: string) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const board = boards.find((item) => item.id === id);
      resolve(board);
    }, 20);
  });

  return promise.then((data) => data);
};

const addBoard = async ({ title, columns }: BoardType) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const board = new Board({ title, columns });
      boards.push(board);
      resolve(board);
    }, 20);
  });

  return promise.then((data) => data);
};

const updateBoard = async (id: string, { title, columns }: BoardType) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const indexBoard = boards.findIndex((board) => board.id === id);
      boards[indexBoard] = { ...boards[indexBoard], title, columns };
      resolve(boards[indexBoard]);
    }, 20);
  });

  return promise.then((data) => data);
};

const deleteBoard = async (id: string) => {
  const promise = new Promise((resolve) => {
    setTimeout(async () => {
      const indexBoard = boards.findIndex((board) => board.id === id);
      boards.splice(indexBoard, 1);
      const tasks = await tasksRepo.getAllTasks(id);
      tasks.forEach(
        (task) => task.boardId === id && tasksRepo.deleteTask(task.id)
      );
      resolve(indexBoard);
    }, 20);
  });

  return promise.then((data) => data);
};

export const boardsRepo = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
