import { Board } from '../../types';
import { boardsRepo } from './board.memory.repository';

/**
 * Service for getting all boards
 * @returns all boards
 */
const getAllBoards = (): Promise<Board[]> => boardsRepo.getAllBoards();

/**
 * Service for getting board by id
 * @param boardId - board id
 * @returns board found by id
 */
const getBoardById = (boardId: string): Promise<Board | undefined> =>
  boardsRepo.getBoardById(boardId);

/**
 * Service for adding new board
 * @param board - data for creating new board
 * @returns created board
 */
const addBoard = (board: Board): Promise<Board> => boardsRepo.addBoard(board);

/**
 * Service for updating board by id
 * @param boardId - board id
 * @param board - new board data to update
 * @returns updated board
 */
const updateBoard = (boardId: string, board: Board): Promise<Board> =>
  boardsRepo.updateBoard(boardId, board);

/**
 * Service for deleting board by id
 * @param boardId - board id
 * @returns index of deleted board
 */
const deleteBoard = (boardId: string): Promise<number> =>
  boardsRepo.deleteBoard(boardId);

export const boardService = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
