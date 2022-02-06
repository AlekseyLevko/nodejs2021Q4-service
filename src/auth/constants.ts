import config from '../common/config';

export const jwtConstants = {
  secret: config().JWT_SECRET_KEY,
};
