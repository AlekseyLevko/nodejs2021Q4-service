import { User } from '../../types';
import { usersRepo } from './user.memory.repository';

const getAllUsers = () => usersRepo.getAllUsers();

const getUserById = (userId: string) => usersRepo.getUserById(userId);

const addUser = (user: User) => usersRepo.addUser(user);

const updateUser = (userId: string, user: User) =>
  usersRepo.updateUser(userId, user);

const deleteUser = (userId: string) => usersRepo.deleteUser(userId);

export const userService = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
