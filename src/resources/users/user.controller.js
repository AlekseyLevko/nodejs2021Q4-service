const userService = require('./user.service');

const getAllUsers = async (req, reply) => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

const getUserById = async (req, reply) => {
  const { userId } = req.params;
  const user = await userService.getUserById(userId);
  if (!user)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send(user);
};

const addUser = async (req, reply) => {
  const user = req.body;
  const newUser = await userService.addUser(user);
  reply.code(201).send(newUser);
};

const updateUser = async (req, reply) => {
  const { userId } = req.params;
  const user = req.body;
  const updatedUser = await userService.updateUser(userId, user);
  if (!updatedUser)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send(updatedUser);
};

const deleteUser = async (req, reply) => {
  const { userId } = req.params;
  const deletedUserIndex = await userService.deleteUser(userId);
  if (deletedUserIndex === -1)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send({ message: ` user with id ${userId} has been deleted` });
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
