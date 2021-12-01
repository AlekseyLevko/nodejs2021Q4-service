const usersRepo = require('./user.memory.repository');

const getAllUsers = async (req, reply) => {
  const users = await usersRepo.getAllUsers();
  reply.send(users);
};

const getUserById = async (req, reply) => {
  const { userId } = req.params;
  const user = await usersRepo.getUserById(userId);
  reply.send(user);
};

const addUser = async (req, reply) => {
  const user = req.body;
  const newUser = await usersRepo.addUser(user);
  reply.code(201).send(newUser);
};

const updateUser = async (req, reply) => {
  const { userId } = req.params;
  const user = req.body;
  const updatedUser = await usersRepo.updateUser(userId, user);
  reply.send(updatedUser);
};

const deleteUser = async (req, reply) => {
  const { userId } = req.params;
  await usersRepo.deleteUser(userId);
  reply.send({ message: ` user with id ${userId} has been deleted` });
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
