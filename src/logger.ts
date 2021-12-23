import path from 'path';
import pino from 'pino';
import { config } from './common/config';

const commonOpts = {
  translateTime: 'yyyy-mm-dd HH:MM:ss Z',
  levelFirst: true,
  colorize: false,
};

export const logger = pino({
  level: 'trace',
  transport: {
    targets: [
      {
        level: 'error',
        target: 'pino-pretty',
        options: {
          ...commonOpts,
          destination: path.join(__dirname, '../logs/error.log'),
        },
      },
      {
        level: config.LOGGING_LEVEL as pino.LevelWithSilent,
        target: 'pino-pretty',
        options: {
          ...commonOpts,
          destination: path.join(__dirname, '../logs/debug.log'),
        },
      },
    ],
  },
});
