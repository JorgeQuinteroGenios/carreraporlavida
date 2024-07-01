import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EpsEntity } from './entities/eps.entity';

@Injectable()
export class EpsService {
  constructor(
    @InjectRepository(EpsEntity)
    private readonly epsRepository: Repository<EpsEntity>,
  ) {}
  findAll() {
    return this.epsRepository.find();
  }

  findOne(epsId: number) {
    return this.epsRepository.findOneBy({ epsId });
  }
}