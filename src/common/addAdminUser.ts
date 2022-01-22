import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../resources/users/user.entity';
import { config } from './config';

const addAdminUser = async () => {
  const userRepository = getRepository(User);
  const admin = await userRepository.findOne({ login: 'admin' });
  const hash = await bcrypt.hash('admin', config.SALT_ROUNDS);

  if (!admin) {
    const user = userRepository.create({
      id: uuid(),
      name: 'admin',
      login: 'admin',
      password: hash,
    });

    await userRepository.save(user);
  }
};

export { addAdminUser };
