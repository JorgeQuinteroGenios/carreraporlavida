import { PartialType } from '@nestjs/mapped-types';
import { RequestRunnerTeamDto } from './create-runner.dto';

export class UpdateRunnerDto extends PartialType(RequestRunnerTeamDto) {}
