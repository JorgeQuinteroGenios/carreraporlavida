import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from '../guards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  findAllUser() {
    return this.usersService.findAllUser();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOneUser(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
