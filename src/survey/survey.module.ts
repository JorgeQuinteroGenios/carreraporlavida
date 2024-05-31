import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from './entities/survey.entity';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([SurveyEntity])],
  controllers: [SurveyController],
  providers: [SurveyService, JwtStrategy],
})
export class SurveyModule {}
