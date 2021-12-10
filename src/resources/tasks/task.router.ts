import { FastifyInstance, FastifyServerOptions } from 'fastify';

const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require('./task.controller');

const Task = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'integer' },
    description: { type: 'string' },
    userId: { type: ['string', 'null'] },
    boardId: { type: ['string', 'null'] },
    columnId: { type: ['string', 'null'] },
  },
};

const getTasksOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Task,
      },
    },
  },
  handler: getAllTasks,
};

const getTaskOpts = {
  schema: {
    response: {
      200: Task,
    },
  },
  handler: getTaskById,
};

const postTaskOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'order', 'description', 'userId'],
      properties: {
        title: { type: 'string' },
        order: { type: 'integer' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        columnId: { type: ['string', 'null'] },
      },
    },
    response: {
      201: Task,
    },
  },
  handler: addTask,
};

const updateTaskOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'order', 'description', 'userId'],
      properties: {
        title: { type: 'string' },
        order: { type: 'integer' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        columnId: { type: ['string', 'null'] },
      },
    },
    response: {
      200: Task,
    },
  },
  handler: updateTask,
};

const deleteTaskOpts = {
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
  handler: deleteTask,
};

const taskRoutes = (
  fastify: FastifyInstance,
  options: FastifyServerOptions,
  done: () => void
) => {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);
  fastify.put('/boards/:boardId/tasks/:taskId', updateTaskOpts);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);

  done();
};

export default taskRoutes;
