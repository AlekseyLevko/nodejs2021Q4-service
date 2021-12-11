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

const getAllTasks = async (req: CustomRequest, reply: FastifyReply) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllTasks(boardId);
  reply.send(tasks);
};

const getTaskById = async (req: CustomRequest, reply: FastifyReply) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTaskById(boardId, taskId);
  if (!task)
    reply.code(404).send({ message: `task with id ${taskId} not found` });
  reply.send(task);
};

const addTask = async (req: CustomRequest, reply: FastifyReply) => {
  const { boardId } = req.params;
  const task = req.body;
  const newTask = await taskService.addTask(boardId, task);
  reply.code(201).send(newTask);
};

const updateTask = async (req: CustomRequest, reply: FastifyReply) => {
  const { boardId, taskId } = req.params;
  const task = req.body;
  const updatedTask = await taskService.updateTask(boardId, taskId, task);
  if (!updatedTask)
    reply.code(404).send({ message: `task with id ${taskId} not found` });
  reply.send(updatedTask);
};

const deleteTask = async (req: CustomRequest, reply: FastifyReply) => {
  const { taskId } = req.params;
  const deletedTaskIndex = await taskService.deleteTask(taskId);
  if (deletedTaskIndex === -1)
    reply.code(404).send({ message: `task with id ${taskId} not found` });
  reply.send({ message: ` task with id ${taskId} has been deleted` });
};

export { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
