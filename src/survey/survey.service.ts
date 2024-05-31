import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyEntity } from './entities/survey.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyEntity)
    private readonly surveyRepository: Repository<SurveyEntity>,
  ) {}

  createSurvey(createSurveyDto: CreateSurveyDto) {
    const newSurvey = this.surveyRepository.create(createSurveyDto);
    return this.surveyRepository.save(newSurvey);
  }

  findAllSurvey() {
    return this.surveyRepository.find();
  }

  findOneSurvey(surveyId: number) {
    return this.surveyRepository.findOne({
      where: { surveyId },
    });
  }

  updateSurvey(surveyId: number, updateSurveyDto: UpdateSurveyDto) {
    return this.surveyRepository.update({ surveyId }, updateSurveyDto);
  }

  removeSurvey(surveyId: number) {
    return this.surveyRepository.delete({ surveyId });
  }
}
