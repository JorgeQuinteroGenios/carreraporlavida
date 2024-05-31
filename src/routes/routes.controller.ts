import { Controller, Get, Param } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  findAllRoute() {
    return this.routesService.findAllRoute();
  }

  @Get(':id')
  findOneRoute(@Param('id') id: string) {
    return this.routesService.findOneRoute(+id);
  }
}
