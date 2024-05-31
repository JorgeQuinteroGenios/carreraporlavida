import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from './entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>,
  ) {}

  createTeam(createTeamDto: CreateTeamDto) {
    const newTeam = this.teamRepository.create(createTeamDto);
    return this.teamRepository.save(newTeam);
  }

  findAllTeam() {
    return this.teamRepository.find({ relations: ['runner'] });
  }

  findOneTeam(teamId: number) {
    return this.teamRepository.findOne({
      where: { teamId },
      relations: ['runner'],
    });
  }

  updateTeam(teamId: number, updateTeamDto: UpdateTeamDto) {
    return this.teamRepository.update({ teamId }, updateTeamDto);
  }

  removeTeam(teamId: number) {
    return this.teamRepository.delete({ teamId });
  }
}
