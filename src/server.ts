import app from './app';
import { config } from './common/config';

const { PORT } = config;

const start: () => void = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
