import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import boardRoutes from './resources/boards/board.router';
import taskRoutes from './resources/tasks/task.router';
import userRoutes from './resources/users/user.router';

const server = fastify({ logger: false });

server.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: '/doc',
  swagger: {
    info: {
      title: 'rest-service',
      description: 'REST service using Fastify & TypeScript',
      version: '1.0.0',
    },
  },
});

server.register(userRoutes);
server.register(boardRoutes);
server.register(taskRoutes);

export default server;
