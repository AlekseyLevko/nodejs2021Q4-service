import { User as UserType } from '../../types';
import { tasksRepo } from '../tasks/task.memory.repository';
import User from './user.model';

const users: UserType[] = [];

/**
 * Getting all users from DB
 * @returns all users
 */
const getAllUsers = async () => {
  const promise = new Promise<UserType[]>((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Getting user by id from DB
 * @param id - user id
 * @returns user found by id
 */
const getUserById = async (id: string) => {
  const promise = new Promise<UserType | undefined>((resolve) => {
    setTimeout(() => {
      const user = users.find((item) => item.id === id);
      resolve(user);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Adding new user to DB
 * @param user - data for creating new user
 * @returns created user
 */
const addUser = async (user: UserType) => {
  const { name, login, password } = user;
  const promise = new Promise<UserType>((resolve) => {
    setTimeout(() => {
      const newUser = new User({ name, login, password });
      users.push(newUser);
      resolve(newUser);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Updating user by id in DB
 * @param id - user id
 * @param updatedUser - new user data to update
 * @returns updated user
 */
const updateUser = async (id: string, updatedUser: UserType) => {
  const { name, login, password } = updatedUser;
  const promise = new Promise<UserType>((resolve) => {
    setTimeout(() => {
      const indexUser = users.findIndex((user) => user.id === id);
      users[indexUser] = { ...users[indexUser], name, login, password };
      resolve(users[indexUser]);
    }, 20);
  });

  return promise.then((data) => data);
};

/**
 * Deleting user from DB
 * @param id - user id
 * @returns index of deleted user
 */
const deleteUser = async (id: string) => {
  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      const indexUser = users.findIndex((user) => user.id === id);
      users.splice(indexUser, 1);
      tasksRepo.tasks.forEach(
        (task) => task.userId === id && task.setNullToUserId()
      );
      resolve(indexUser);
    }, 20);
  });

  return promise.then((data) => data);
};

export const usersRepo = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
