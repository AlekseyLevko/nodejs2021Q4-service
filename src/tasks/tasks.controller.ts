import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('/boards/:boardId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.create(boardId, createTaskDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Param('boardId', ParseUUIDPipe) boardId: string) {
    return this.tasksService.findAll(boardId);
  }

  @Get(':taskId')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('taskId', ParseUUIDPipe) taskId: string) {
    const task = await this.tasksService.findOne(taskId);
    if (!task) {
      throw new NotFoundException('Not Found');
    } else {
      return task;
    }
  }

  @Put(':taskId')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(taskId, updateTaskDto);
  }

  @Delete(':taskId')
  @UseGuards(JwtAuthGuard)
  remove(@Param('taskId', ParseUUIDPipe) taskId: string) {
    return this.tasksService.remove(taskId);
  }
}
