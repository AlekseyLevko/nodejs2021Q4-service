import { FastifyInstance } from 'fastify';
import { addToken } from './login.controller';

const postLoginOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['login', 'password'],
      properties: {
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          token: { type: 'string' },
        },
      },
    },
  },
  handler: addToken,
};

const loginRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post('/login', postLoginOpts);
};

export default loginRoute;
