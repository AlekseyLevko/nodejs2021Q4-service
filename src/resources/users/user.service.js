const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

const getUserById = (userId) => usersRepo.getUserById(userId);

const addUser = (user) => usersRepo.addUser(user);

const updateUser = (userId, user) => usersRepo.updateUser(userId, user);

const deleteUser = (userId) => usersRepo.deleteUser(userId);

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
