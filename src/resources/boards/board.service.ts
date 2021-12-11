import { Board } from '../../types';
import { boardsRepo } from './board.memory.repository';

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoardById = (boardId: string) => boardsRepo.getBoardById(boardId);

const addBoard = (board: Board) => boardsRepo.addBoard(board);

const updateBoard = (boardId: string, board: Board) =>
  boardsRepo.updateBoard(boardId, board);

const deleteBoard = (boardId: string) => boardsRepo.deleteBoard(boardId);

export const boardService = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
