import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RouteEntity } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(RouteEntity)
    private readonly teamRepository: Repository<RouteEntity>,
  ) {}

  findAllRoute() {
    return this.teamRepository.find();
  }

  findOneRoute(routeId: number) {
    return this.teamRepository.findOne({
      where: { routeId },
    });
  }
}
