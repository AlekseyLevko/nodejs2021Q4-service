import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'tasks'>> {
    const newUser = this.usersRepository.create({
      ...createUserDto,
      id: uuid(),
    });

    return await this.usersRepository.save(newUser);
  }

  findAll(): Promise<Omit<User, 'password'>[] | undefined> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<Omit<User, 'password'> | undefined> {
    const user = await this.usersRepository.findOne(id);

    if (user) {
      return user;
    }
    return;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'tasks'> | undefined> {
    const user = await this.usersRepository.findOne(id);
    if (user) {
      this.usersRepository.merge(user, updateUserDto);
      await this.usersRepository.save(user);
    }
    return user;
  }

  async remove(id: string) {
    const results = await this.usersRepository.delete(id);
    return Number(results.affected);
  }
}
