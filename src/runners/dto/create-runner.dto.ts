import { IsString } from 'class-validator';

export class RequestRunnerDto {
  @IsString()
  docNumber: string;
  birthday: Date;
  @IsString()
  gender: string;
  @IsString()
  country: string;
  @IsString()
  state: string;
  @IsString()
  city: string;
  @IsString()
  address: string;
  @IsString()
  eps: string;
  @IsString()
  rh: string;
  @IsString()
  userId: string;
  @IsString()
  typeId: string;
}

export class RequestRunnerTeamDto extends RequestRunnerDto {
  @IsString()
  teamId: string;
}
