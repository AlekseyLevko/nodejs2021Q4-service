import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../../types';
import { userService } from './user.service';

type CustomRequest = FastifyRequest<{
  Params: {
    userId: string;
  };
  Body: User;
}>;

const getAllUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

const getUserById = async (req: CustomRequest, reply: FastifyReply) => {
  const { userId } = req.params;
  const user = await userService.getUserById(userId);
  if (!user)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send(user);
};

const addUser = async (req: CustomRequest, reply: FastifyReply) => {
  const user = req.body;
  const newUser = await userService.addUser(user);
  reply.code(201).send(newUser);
};

const updateUser = async (req: CustomRequest, reply: FastifyReply) => {
  const { userId } = req.params;
  const user = req.body;
  const updatedUser = await userService.updateUser(userId, user);
  if (!updatedUser)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send(updatedUser);
};

const deleteUser = async (req: CustomRequest, reply: FastifyReply) => {
  const { userId } = req.params;
  const deletedUserIndex = await userService.deleteUser(userId);
  if (deletedUserIndex === -1)
    reply.code(404).send({ message: ` user with id ${userId} not found` });
  reply.send({ message: ` user with id ${userId} has been deleted` });
};

export { getAllUsers, getUserById, addUser, updateUser, deleteUser };
