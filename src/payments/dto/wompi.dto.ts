import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WompiDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  userId: string;
}
