const User = require('./user.model');
const { tasks } = require('../tasks/task.memory.repository');

const users = [];

const getAllUsers = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 20);
  });

  return promise.then((data) => data);
};

const getUserById = async (id) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((item) => item.id === id);
      resolve(user);
    }, 20);
  });

  return promise.then((data) => data);
};

const addUser = async ({ name, login, password }) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const user = new User({ name, login, password });
      users.push(user);
      resolve(user);
    }, 20);
  });

  return promise.then((data) => data);
};

const updateUser = async (id, { name, login, password }) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const indexUser = users.findIndex((user) => user.id === id);
      users[indexUser] = { ...users[indexUser], name, login, password };
      resolve(users[indexUser]);
    }, 20);
  });

  return promise.then((data) => data);
};

const deleteUser = async (id) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const indexUser = users.findIndex((user) => user.id === id);
      users.splice(indexUser, 1);
      tasks.forEach((task) => task.userId === id && task.setNullToUserId());
      resolve(indexUser);
    }, 20);
  });

  return promise.then((data) => data);
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
