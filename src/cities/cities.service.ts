import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}
  findAll() {
    return this.cityRepository.find();
  }

  findOne(cityId: number) {
    return this.cityRepository.findOneBy({ cityId });
  }

  findList(departmentId: number) {
    return this.cityRepository.findBy({ departmentId });
  }
}
