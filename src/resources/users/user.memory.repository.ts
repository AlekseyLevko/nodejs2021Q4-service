import { User as UserType } from '../../types';
import { tasksRepo } from '../tasks/task.memory.repository';
import User from './user.model';

const users: UserType[] = [];

const getAllUsers = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 20);
  });

  return promise.then((data) => data);
};

const getUserById = async (id: string) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((item) => item.id === id);
      resolve(user);
    }, 20);
  });

  return promise.then((data) => data);
};

const addUser = async ({ name, login, password }: UserType) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const user = new User({ name, login, password });
      users.push(user);
      resolve(user);
    }, 20);
  });

  return promise.then((data) => data);
};

const updateUser = async (id: string, { name, login, password }: UserType) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const indexUser = users.findIndex((user) => user.id === id);
      users[indexUser] = { ...users[indexUser], name, login, password };
      resolve(users[indexUser]);
    }, 20);
  });

  return promise.then((data) => data);
};

const deleteUser = async (id: string) => {
  const promise = new Promise((resolve) => {
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
