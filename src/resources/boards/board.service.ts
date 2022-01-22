import { Board as IBoard } from './board.entity';
import { boardsRepo } from './board.memory.repository';

/**
 * Service for getting all boards
 * @returns all boards
 */
const getAllBoards = (): Promise<IBoard[]> => boardsRepo.getAllBoards();

/**
 * Service for getting board by id
 * @param boardId - board id
 * @returns board found by id
 */
const getBoardById = (boardId: string): Promise<IBoard | undefined> =>
  boardsRepo.getBoardById(boardId);

/**
 * Service for adding new board
 * @param board - data for creating new board
 * @returns created board
 */
const addBoard = (board: IBoard): Promise<IBoard> => boardsRepo.addBoard(board);

/**
 * Service for updating board by id
 * @param boardId - board id
 * @param board - new board data to update
 * @returns updated board
 */
const updateBoard = (
  boardId: string,
  board: IBoard
): Promise<IBoard | undefined> => boardsRepo.updateBoard(boardId, board);

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
