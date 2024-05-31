import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { TypedocsService } from './typedocs.service';
import { JwtGuard } from '../guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('typedocs')
export class TypedocsController {
  constructor(private readonly typedocsService: TypedocsService) {}

  @Get()
  findAllTypedoc() {
    return this.typedocsService.findAllTypedoc();
  }

  @Get(':id')
  findOneTypedoc(@Param('id') id: string) {
    return this.typedocsService.findOneTypedoc(+id);
  }
}
