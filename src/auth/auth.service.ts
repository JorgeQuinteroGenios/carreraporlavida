import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { decodePassword } from '../utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: AuthDto) {
    const foundUser = await this.userRepository.findOne({
      where: { email: email },
    });

    if (!foundUser) {
      throw new NotFoundException('User does not exist');
    }

    const compareHashed = await decodePassword(password, foundUser.password);

    if (compareHashed) {
      const { password: string, ...userToken } = foundUser;
      const token = this.jwtService.sign({ userId: foundUser.userId });
      return { token, userToken };
    } else {
      throw new NotFoundException('Wrong password');
    }
  }
}
