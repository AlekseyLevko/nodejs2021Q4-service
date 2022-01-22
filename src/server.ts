import { createConnection } from 'typeorm';
import app from './app';
import { addAdminUser } from './common/addAdminUser';
import { config } from './common/config';
import { logger } from './logger';

const { PORT } = config;

createConnection().then(() => {
  addAdminUser();
  try {
    app.listen(PORT, '0.0.0.0', () => {
      logger.info(`App is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
});
