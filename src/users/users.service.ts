import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { encodePassword } from '../utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const password = await encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }

  findAllUser() {
    return this.userRepository.find({
      relations: ['orders'],
    });
  }

  findOneUser(userId: string) {
    return this.userRepository.findOne({
      where: { userId },
      relations: ['orders'],
    });
  }

  updateUser(userId: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ userId }, updateUserDto);
  }

  removeUser(userId: string) {
    return this.userRepository.delete({ userId });
  }
}
