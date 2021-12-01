const boardService = require('./board.service');

const getAllBoards = async (req, reply) => {
  const boards = await boardService.getAllBoards();
  reply.send(boards);
};

const getBoardById = async (req, reply) => {
  const { boardId } = req.params;
  const board = await boardService.getBoardById(boardId);
  if (!board)
    reply.code(404).send({ message: ` board with id ${boardId} not found` });
  reply.send(board);
};

const addBoard = async (req, reply) => {
  const board = req.body;
  const newBoard = await boardService.addBoard(board);
  reply.code(201).send(newBoard);
};

const updateBoard = async (req, reply) => {
  const { boardId } = req.params;
  const board = req.body;
  const updatedBoard = await boardService.updateBoard(boardId, board);
  if (!updatedBoard)
    reply.code(404).send({ message: ` board with id ${boardId} not found` });
  reply.send(updatedBoard);
};

const deleteBoard = async (req, reply) => {
  const { boardId } = req.params;
  const deletedBoardIndex = await boardService.deleteBoard(boardId);
  if (deletedBoardIndex === -1)
    reply.code(404).send({ message: ` board with id ${boardId} not found` });
  reply.send({ message: ` board with id ${boardId} has been deleted` });
};

module.exports = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
