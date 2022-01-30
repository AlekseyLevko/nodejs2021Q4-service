import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private boardsRepository: Repository<Board>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    const newBoard = this.boardsRepository.create({
      ...createBoardDto,
      id: uuid(),
    });

    return this.boardsRepository.save(newBoard);
  }

  findAll() {
    return this.boardsRepository.find();
  }

  findOne(id: string) {
    return this.boardsRepository.findOne(id);
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    const board = await this.boardsRepository.findOne(id);
    if (board) {
      this.boardsRepository.merge(board, updateBoardDto);
      await this.boardsRepository.save(board);
    }
    return board;
  }

  async remove(id: string) {
    return this.boardsRepository.delete(id);
  }
}
