import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RequestRunnerTeamDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RunnerEntity } from './entities/runner.entity';
import { UserEntity } from '../users/entities/user.entity';
import { TeamEntity } from '../teams/entities/team.entity';
import { TypedocEntity } from '../typedocs/entities/typedoc.entity';
import { RequestRunnerDto } from './dto/create-runner.dto';

@Injectable()
export class RunnersService {
  constructor(
    @InjectRepository(RunnerEntity)
    private readonly runnerRepository: Repository<RunnerEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>,
    @InjectRepository(TypedocEntity)
    private readonly typedocRepository: Repository<TypedocEntity>,
  ) {}

  async createRunnerNoTeam(requestRunnerDto: RequestRunnerDto) {
    const userFound = await this.userRepository.findOneBy({
      userId: requestRunnerDto.userId,
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    const typedocFound = await this.typedocRepository.findOneBy({
      typeId: Number(requestRunnerDto.typeId),
    });

    if (!typedocFound) {
      throw new NotFoundException();
    }

    const newRunner = this.runnerRepository.create(requestRunnerDto);
    const savedRunner = await this.runnerRepository.save(newRunner);
    savedRunner.user = userFound;
    savedRunner.typedoc = typedocFound;

    return this.runnerRepository.save(savedRunner);
  }

  async createRunnerWithTeam(requestRunnerTeamDto: RequestRunnerTeamDto) {
    const userFound = await this.userRepository.findOneBy({
      userId: requestRunnerTeamDto.userId,
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    const typedocFound = await this.typedocRepository.findOneBy({
      typeId: Number(requestRunnerTeamDto.typeId),
    });

    if (!typedocFound) {
      throw new NotFoundException();
    }

    const teamFound = await this.teamRepository.findOneBy({
      teamId: Number(requestRunnerTeamDto.teamId),
    });

    if (!teamFound) {
      throw new NotFoundException();
    }

    const teams = await this.runnerRepository.find({
      where: {
        team: { teamId: Number(requestRunnerTeamDto.teamId) },
      },
    });

    let teamCount = 0;

    teams.forEach(() => {
      teamCount++;
    });

    if (teamCount >= 5) {
      throw new ForbiddenException('Team is full');
    }

    const newRunner = this.runnerRepository.create(requestRunnerTeamDto);
    const savedRunner = await this.runnerRepository.save(newRunner);
    savedRunner.user = userFound;
    savedRunner.typedoc = typedocFound;
    savedRunner.team = teamFound;

    return this.runnerRepository.save(savedRunner);
  }

  findAllRunner() {
    return this.runnerRepository.find({
      relations: ['userId', 'typedoc', 'team'],
    });
  }

  findOneRunner(runnerId: number) {
    return this.runnerRepository.findOne({
      where: { runnerId },
      relations: ['userId', 'typedoc', 'team'],
    });
  }

  updateRunner(id: number, updateRunnerDto: UpdateRunnerDto) {
    return this.runnerRepository.update(id, updateRunnerDto);
  }

  removeRunner(id: number) {
    return this.runnerRepository.delete(id);
  }
}
