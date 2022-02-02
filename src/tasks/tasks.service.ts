import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  create(boardId: string, createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.create({
      ...createTaskDto,
      boardId,
    });

    return this.taskRepository.save(newTask);
  }

  findAll(boardId: string) {
    return this.taskRepository.find({ where: { boardId } });
  }

  findOne(taskId: string) {
    return this.taskRepository.findOne(taskId);
  }

  async update(taskId: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOne(taskId);
    if (task) {
      this.taskRepository.merge(task, updateTaskDto);
      await this.taskRepository.save(task);
    }
    return task;
  }

  remove(taskId: string) {
    return this.taskRepository.delete(taskId);
  }
}