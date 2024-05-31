import { Test, TestingModule } from '@nestjs/testing';
import { RunnersController } from './runners.controller';
import { RunnersService } from './runners.service';

describe('RunnersController', () => {
  let controller: RunnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RunnersController],
      providers: [RunnersService],
    }).compile();

    controller = module.get<RunnersController>(RunnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
