import { IBoard } from '../../types';
import { tasksRepo } from '../tasks/task.memory.repository';
import Board from './board.model';

const boards: IBoard[] = [];

/**
 * Getting all boards from DB
 * @returns all boards
 */
const getAllBoards = async () => {
  const promise = new Promise<IBoard[]>((resolve) => {
    setTimeout(() => {
      resolve(boards);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Getting board by id from DB
 * @param id - board id
 * @returns board found by id
 */
const getBoardById = async (id: string) => {
  const promise = new Promise<Board | undefined>((resolve) => {
    setTimeout(() => {
      const board = boards.find((item) => item.id === id);
      resolve(board);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Adding new board to DB
 * @param board - data for creating new board
 * @returns created board
 */
const addBoard = async (board: IBoard) => {
  const { title, columns } = board;
  const promise = new Promise<IBoard>((resolve) => {
    setTimeout(() => {
      const newBoard = new Board({ title, columns });
      boards.push(newBoard);
      resolve(newBoard);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Updating board by id in DB
 * @param id - board id
 * @param updatedBoard - new board data to update
 * @returns updated board
 */
const updateBoard = async (id: string, updatedBoard: IBoard) => {
  const { title, columns } = updatedBoard;
  const promise = new Promise<IBoard>((resolve) => {
    setTimeout(() => {
      const indexBoard = boards.findIndex((board) => board.id === id);
      boards[indexBoard] = { ...boards[indexBoard], title, columns };
      resolve(boards[indexBoard]);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Deleting board from DB
 * @param id - board id
 * @returns index of deleted board
 */
const deleteBoard = async (id: string) => {
  const promise = new Promise<number>((resolve) => {
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
