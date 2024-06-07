import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { JwtGuard } from '../guards/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Survey')
@UseGuards(JwtGuard)
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  createSurvey(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveyService.createSurvey(createSurveyDto);
  }

  @Get()
  findAllSurvey() {
    return this.surveyService.findAllSurvey();
  }

  @Get(':id')
  findOneSurvey(@Param('id') id: string) {
    return this.surveyService.findOneSurvey(+id);
  }

  @Patch(':id')
  updateSurvey(
    @Param('id') id: string,
    @Body() updateSurveyDto: UpdateSurveyDto,
  ) {
    return this.surveyService.updateSurvey(+id, updateSurveyDto);
  }

  @Delete(':id')
  removeSurvey(@Param('id') id: string) {
    return this.surveyService.removeSurvey(+id);
  }
}
