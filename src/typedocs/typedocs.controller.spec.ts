import { Test, TestingModule } from '@nestjs/testing';
import { TypedocsController } from './typedocs.controller';
import { TypedocsService } from './typedocs.service';

describe('TypedocsController', () => {
  let controller: TypedocsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypedocsController],
      providers: [TypedocsService],
    }).compile();

    controller = module.get<TypedocsController>(TypedocsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
