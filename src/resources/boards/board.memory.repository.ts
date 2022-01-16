import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Task } from '../tasks/task.entity';
import { Board } from './board.entity';

/**
 * Getting all boards from DB
 * @returns all boards
 */
const getAllBoards = () => getRepository(Board).find();

/**
 * Getting board by id from DB
 * @param id - board id
 * @returns board found by id
 */
const getBoardById = (id: string) => getRepository(Board).findOne(id);

/**
 * Adding new board to DB
 * @param board - data for creating new board
 * @returns created board
 */
const addBoard = (board: Board) => {
  const boardRepository = getRepository(Board);
  const newBoard = boardRepository.create({ ...board, id: uuid() });
  return boardRepository.save(newBoard);
};

/**
 * Updating board by id in DB
 * @param id - board id
 * @param updatedBoard - new board data to update
 * @returns updated board
 */
const updateBoard = async (id: string, updatedBoard: Board) => {
  const boardRepository = getRepository(Board);
  const board = await boardRepository.findOne(id);
  if (board) {
    boardRepository.merge(board, updatedBoard);
    await boardRepository.save(board);
  }

  return board;
};

/**
 * Deleting board from DB
 * @param id - board id
 * @returns index of deleted board
 */
const deleteBoard = async (id: string) => {
  const results = await getRepository(Board).delete(id);

  const taskRepository = getRepository(Task);
  taskRepository.delete({ boardId: id });
  return Number(results.affected);
};

export const boardsRepo = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
