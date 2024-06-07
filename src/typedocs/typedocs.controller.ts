import { Controller, Get, Param } from '@nestjs/common';
import { TypedocsService } from './typedocs.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Document Type')
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
