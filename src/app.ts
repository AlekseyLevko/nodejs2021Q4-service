import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import { logger } from './logger';
import boardRoutes from './resources/boards/board.router';
import taskRoutes from './resources/tasks/task.router';
import userRoutes from './resources/users/user.router';

process.on('uncaughtException', (err) => {
  logger.error(err, 'uncaughtException');
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error(reason, 'unhandledRejection');
  process.exit(1);
});

const app = fastify({ logger });

app.addHook('preHandler', async (req) => {
  req.log.info({ params: req.params, query: req.query, body: req.body });
});

app.register(fastifySwagger, {
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

app.register(userRoutes);
app.register(boardRoutes);
app.register(taskRoutes);

export default app;
