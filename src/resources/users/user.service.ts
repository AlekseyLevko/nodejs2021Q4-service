import { User } from '../../types';
import { usersRepo } from './user.memory.repository';

/**
 * Service for getting all users
 * @returns all users
 */
const getAllUsers = (): Promise<User[]> => usersRepo.getAllUsers();

/**
 * Service for getting user by id
 * @param userId - user id
 * @returns user found by id
 */
const getUserById = (userId: string): Promise<User | undefined> =>
  usersRepo.getUserById(userId);

/**
 * Service for adding new user
 * @param user - data for creating new user
 * @returns created user
 */
const addUser = (user: User): Promise<User> => usersRepo.addUser(user);

/**
 * Service for updating user by id
 * @param userId - user id
 * @param user - new user data to update
 * @returns updated user
 */
const updateUser = (userId: string, user: User): Promise<User> =>
  usersRepo.updateUser(userId, user);

/**
 * Service for deleting user by id
 * @param userId - user id
 * @returns index of deleted user
 */
const deleteUser = (userId: string): Promise<number> =>
  usersRepo.deleteUser(userId);

export const userService = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
