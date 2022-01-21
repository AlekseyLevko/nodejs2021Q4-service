import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { config } from '../common/config';
import { User } from '../resources/users/user.entity';

const addToken = async (login: string, password: string) => {
  const user = await getRepository(User).findOne({ login });
  if (!user) {
    return user;
  }

  const { id: userId, password: passwordHash } = user;

  const match = await bcrypt.compare(password, passwordHash);

  if (!match) {
    return undefined;
  }

  return jwt.sign({ userId, login }, config.SECRET_KEY);
};

export const loginService = {
  addToken,
};
