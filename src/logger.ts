import path from 'path';
import pino from 'pino';

export const logger = pino({
  transport: {
    targets: [
      {
        level: 'error',
        target: 'pino-pretty',
        options: {
          translateTime: 'yyyy-mm-dd HH:MM:ss Z',
          levelFirst: true,
          colorize: false,
          destination: path.join(__dirname, '../logs/error.log'),
        },
      },
      {
        level: 'info',
        target: 'pino-pretty',
        options: {
          translateTime: 'yyyy-mm-dd HH:MM:ss Z',
          levelFirst: true,
          colorize: false,
          destination: path.join(__dirname, '../logs/debug.log'),
        },
      },
    ],
  },
});
