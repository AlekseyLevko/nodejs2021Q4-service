import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IUser } from '../../types';
import { User as UserEntity } from './user.entity';

/**
 * Getting all users from DB
 * @returns all users
 */
const getAllUsers = () => getRepository(UserEntity).find();

/**
 * Getting user by id from DB
 * @param id - user id
 * @returns user found by id
 */
const getUserById = async (id: string) => getRepository(UserEntity).findOne(id);

/**
 * Adding new user to DB
 * @param user - data for creating new user
 * @returns created user
 */
const addUser = async (user: IUser) => {
  const userRepository = getRepository(UserEntity);
  const newUser = userRepository.create({
    ...user,
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
const updateUser = async (id: string, updatedUser: IUser) => {
  const userRepository = getRepository(UserEntity);
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
  const results = await getRepository(UserEntity).delete(id);
  return Number(results.affected);
};

export const usersRepo = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
