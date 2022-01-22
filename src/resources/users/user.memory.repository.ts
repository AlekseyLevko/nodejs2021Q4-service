import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { config } from '../../common/config';
import { Task } from '../tasks/task.entity';
import { User } from './user.entity';

/**
 * Getting all users from DB
 * @returns all users
 */
const getAllUsers = () => getRepository(User).find();

/**
 * Getting user by id from DB
 * @param id - user id
 * @returns user found by id
 */
const getUserById = (id: string) => getRepository(User).findOne(id);

/**
 * Adding new user to DB
 * @param user - data for creating new user
 * @returns created user
 */
const addUser = async (user: User) => {
  const { password } = user;
  const hash = await bcrypt.hash(password, config.SALT_ROUNDS);

  const userRepository = getRepository(User);
  const newUser = userRepository.create({
    ...user,
    password: hash,
    id: uuid(),
  });
  return userRepository.save(newUser);
};

/**
 * Updating user by id in DB
 * @param id - user id
 * @param updatedUser - new user data to update
 * @returns updated user
 */
const updateUser = async (id: string, updatedUser: User) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);
  if (user) {
    userRepository.merge(user, updatedUser);
    await userRepository.save(user);
  }

  return user;
};

/**
 * Deleting user from DB
 * @param id - user id
 * @returns index of deleted user
 */
const deleteUser = async (id: string) => {
  const results = await getRepository(User).delete(id);
  const taskRepository = getRepository(Task);
  taskRepository.update({ userId: id }, { userId: null });
  return Number(results.affected);
};

export const usersRepo = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
