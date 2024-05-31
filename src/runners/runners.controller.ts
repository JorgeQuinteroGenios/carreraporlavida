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
import { RunnersService } from './runners.service';
import { RequestRunnerDto } from './dto/create-runner.dto';
import { RequestRunnerTeamDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';
import { JwtGuard } from '../guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('runners')
export class RunnersController {
  constructor(private readonly runnersService: RunnersService) {}

  @Post('noteam')
  createRunnerNoTeam(@Body() requestRunnerDto: RequestRunnerDto) {
    return this.runnersService.createRunnerNoTeam(requestRunnerDto);
  }

  @Post('withteam')
  createRunnerWithTeam(@Body() requestRunnerTeamDto: RequestRunnerTeamDto) {
    return this.runnersService.createRunnerWithTeam(requestRunnerTeamDto);
  }

  @Get()
  findAllRunner() {
    return this.runnersService.findAllRunner();
  }

  @Get(':id')
  findOneRunner(@Param('id') id: string) {
    return this.runnersService.findOneRunner(+id);
  }

  @Patch(':id')
  updateRunner(
    @Param('id') id: string,
    @Body() updateRunnerDto: UpdateRunnerDto,
  ) {
    return this.runnersService.updateRunner(+id, updateRunnerDto);
  }

  @Delete(':id')
  removeRunner(@Param('id') id: string) {
    return this.runnersService.removeRunner(+id);
  }
}
