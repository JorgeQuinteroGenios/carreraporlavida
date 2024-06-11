import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentEntity } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepository: Repository<DepartmentEntity>,
  ) {}
  findAll() {
    return this.departmentRepository.find();
  }

  findOne(departmentId: number) {
    return this.departmentRepository.findOneBy({ departmentId });
  }
}