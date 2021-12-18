import { FastifyReply, FastifyRequest } from 'fastify';
import { Task } from '../../types';
import { taskService } from './task.service';

type CustomRequest = FastifyRequest<{
  Params: {
    boardId: string;
    taskId: string;
  };
  Body: Task;
}>;

/**
 * Controller for getting all tasks
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const getAllTasks = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllTasks(boardId);
  reply.send(tasks);
};

/**
 * Controller for getting task by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const getTaskById = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTaskById(boardId, taskId);
  if (!task)
    reply.code(404).send({ message: `task with id ${taskId} not found` });
  reply.send(task);
};

/**
 * Controller for adding task
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const addTask = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { boardId } = req.params;
  const task = req.body;
  const newTask = await taskService.addTask(boardId, task);
  reply.code(201).send(newTask);
};

/**
 * Controller for updating task by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const updateTask = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { boardId, taskId } = req.params;
  const task = req.body;
  const updatedTask = await taskService.updateTask(boardId, taskId, task);
  if (!updatedTask)
    reply.code(404).send({ message: `task with id ${taskId} not found` });
  reply.send(updatedTask);
};

/**
 * Controller for deleting task by id
 * @param req - custom request based on fastify request
 * @param reply - fastify reply
 */
const deleteTask = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { taskId } = req.params;
  const deletedTaskIndex = await taskService.deleteTask(taskId);
  if (deletedTaskIndex === -1)
    reply.code(404).send({ message: `task with id ${taskId} not found` });
  reply.send({ message: ` task with id ${taskId} has been deleted` });
};

export { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
