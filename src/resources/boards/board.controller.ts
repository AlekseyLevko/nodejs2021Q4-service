import { FastifyReply, FastifyRequest } from 'fastify';
import { Board as IBoard } from './board.entity';
import { boardService } from './board.service';

type CustomRequest = FastifyRequest<{
  Params: {
    boardId: string;
  };
  Body: IBoard;
}>;

/**
 * Controller for getting all boards
 * @param req - fastify request
 * @param reply - fastify reply
 */
const getAllBoards = async (
  req: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const boards = await boardService.getAllBoards();
  reply.send(boards);
};

/**
 * Controller for getting board by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const getBoardById = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { boardId } = req.params;
  const board = await boardService.getBoardById(boardId);
  if (!board)
    reply.code(404).send({ message: ` board with id ${boardId} not found` });
  reply.send(board);
};

/**
 * Controller for adding board
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const addBoard = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const board = req.body;
  const newBoard = await boardService.addBoard(board);
  reply.code(201).send(newBoard);
};

/**
 * Controller for updating board by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const updateBoard = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { boardId } = req.params;
  const board = req.body;
  const updatedBoard = await boardService.updateBoard(boardId, board);
  if (!updatedBoard)
    reply.code(404).send({ message: ` board with id ${boardId} not found` });
  reply.send(updatedBoard);
};

/**
 * Controller for deleting board by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const deleteBoard = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { boardId } = req.params;
  const deletedBoardIndex = await boardService.deleteBoard(boardId);
  if (deletedBoardIndex === -1)
    reply.code(404).send({ message: ` board with id ${boardId} not found` });
  reply.send({ message: ` board with id ${boardId} has been deleted` });
};

export { getAllBoards, getBoardById, addBoard, updateBoard, deleteBoard };
