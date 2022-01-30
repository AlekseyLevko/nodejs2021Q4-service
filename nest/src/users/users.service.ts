import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<Omit<User, 'password'>[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Omit<User, 'password'>> {
    return this.usersRepository.findOne(id);
  }

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const newUser = this.usersRepository.create({
      ...createUserDto,
      id: uuid(),
    });

    const userToResponse = await this.usersRepository.save(newUser);
    delete userToResponse.password;

    return userToResponse;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersRepository.findOne(id);
    if (user) {
      this.usersRepository.merge(user, updateUserDto);
      await this.usersRepository.save(user);
    }

    delete user.password;

    return user;
  }
}
