import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypedocEntity } from './entities/typedoc.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypedocsService {
  constructor(
    @InjectRepository(TypedocEntity)
    private typedocRepository: Repository<TypedocEntity>,
  ) {}

  findAllTypedoc() {
    return this.typedocRepository.find();
  }

  findOneTypedoc(typeId: number) {
    return this.typedocRepository.findOne({
      where: { typeId },
    });
  }
}
