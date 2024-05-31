import { IsNumber, IsString } from 'class-validator';

export class CreateSurveyDto {
  @IsNumber()
  questionId: number;
  @IsString()
  answer: string;
}
