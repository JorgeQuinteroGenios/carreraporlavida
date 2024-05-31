import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  appWorks() {
    return 'backend is working';
  }
}
