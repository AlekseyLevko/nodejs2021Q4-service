const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoardById = (boardId) => boardsRepo.getBoardById(boardId);

const addBoard = (boardId) => boardsRepo.addBoard(boardId);

const updateBoard = (boardId, board) => boardsRepo.updateBoard(boardId, board);

const deleteBoard = (boardId) => boardsRepo.deleteBoard(boardId);

module.exports = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
