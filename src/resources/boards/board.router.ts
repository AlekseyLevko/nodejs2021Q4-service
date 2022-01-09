import { FastifyInstance } from 'fastify';
import {
  addBoard,
  deleteBoard,
  getAllBoards,
  getBoardById,
  updateBoard,
} from './board.controller';

const Column = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'integer' },
  },
};

const Board = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    columns: { type: 'array', items: Column },
  },
};

const getBoardsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Board,
      },
    },
  },
  handler: getAllBoards,
};

const getBoardOpts = {
  schema: {
    response: {
      200: Board,
    },
  },
  handler: getBoardById,
};

const postBoardOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'columns'],
      properties: {
        title: { type: 'string' },
        columns: { type: 'array', items: Column },
      },
    },
    response: {
      201: Board,
    },
  },
  handler: addBoard,
};

const updateBoardOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'columns'],
      properties: {
        title: { type: 'string' },
        columns: { type: 'array', items: Column },
      },
    },
    response: {
      200: Board,
    },
  },
  handler: updateBoard,
};

const deleteBoardOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteBoard,
};

/**
 * Creating routes for board
 * @param fastify - fastify instance
 */
const boardRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.put('/boards/:boardId', updateBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);
};

export default boardRoutes;
