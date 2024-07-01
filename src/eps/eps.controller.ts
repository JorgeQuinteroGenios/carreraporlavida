import { Controller, Get, Param } from '@nestjs/common';
import { EpsService } from './eps.service';

@Controller('eps')
export class EpsController {
  constructor(private readonly epsService: EpsService) {}

  @Get()
  findAll() {
    return this.epsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epsService.findOne(+id);
  }
}
