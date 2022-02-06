import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcryptjs from 'bcryptjs';
import { Repository } from 'typeorm';
import config from '../common/config';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const hash = bcryptjs.hashSync(
      createUserDto.password,
      config().SALT_ROUNDS,
    );

    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hash,
    });

    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[] | undefined> {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  findByLogin(login: string) {
    return this.usersRepository.findOne({ login });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne(id);
    if (user) {
      const passwordIsChanging = !bcryptjs.compareSync(
        String(updateUserDto.password),
        user.password,
      );

      if (passwordIsChanging) {
        const newHash = bcryptjs.hashSync(
          String(updateUserDto.password),
          config().SALT_ROUNDS,
        );
        this.usersRepository.merge(user, {
          ...updateUserDto,
          password: newHash,
        });
      }
      this.usersRepository.merge(user, {
        ...updateUserDto,
        password: user.password,
      });

      await this.usersRepository.save(user);
    }
    return user;
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
