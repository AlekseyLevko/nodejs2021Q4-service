import app from './app';

const { PORT } = require('./common/config');

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
