import app from './app';
import { config } from './common/config';
import { logger } from './logger';

const { PORT } = config;

try {
  app.listen(PORT, () =>
    logger.info(`App is running on http://localhost:${PORT}`)
  );
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
