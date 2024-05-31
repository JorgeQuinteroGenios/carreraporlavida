import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
})
export class UsersModule {}
