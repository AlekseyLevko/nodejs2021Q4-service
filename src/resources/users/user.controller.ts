import { FastifyReply, FastifyRequest } from 'fastify';
import { IUser } from '../../types';
import { userService } from './user.service';

type CustomRequest = FastifyRequest<{
  Params: {
    userId: string;
  };
  Body: IUser;
}>;

/**
 * Controller for getting all users
 * @param req - fastify request
 * @param reply - fastify reply
 */
const getAllUsers = async (
  req: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

/**
 * Controller for getting user by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const getUserById = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { userId } = req.params;
  const user = await userService.getUserById(userId);
  if (!user)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send(user);
};

/**
 * Controller for adding user
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const addUser = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const user = req.body;
  const newUser = await userService.addUser(user);
  reply.code(201).send(newUser);
};

/**
 * Controller for updating user by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const updateUser = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { userId } = req.params;
  const user = req.body;
  const updatedUser = await userService.updateUser(userId, user);
  if (!updatedUser)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send(updatedUser);
};

/**
 * Controller for deleting user by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const deleteUser = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { userId } = req.params;
  const deletedUserIndex = await userService.deleteUser(userId);
  if (deletedUserIndex === -1)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send({ message: ` user with id ${userId} has been deleted` });
};

export { getAllUsers, getUserById, addUser, updateUser, deleteUser };
