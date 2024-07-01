import { Module } from '@nestjs/common';
import { EpsService } from './eps.service';
import { EpsController } from './eps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpsEntity } from './entities/eps.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EpsEntity])],
  controllers: [EpsController],
  providers: [EpsService],
})
export class EpsModule {}
