import { Test, TestingModule } from '@nestjs/testing';
import { TypedocsService } from './typedocs.service';

describe('TypedocsService', () => {
  let service: TypedocsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypedocsService],
    }).compile();

    service = module.get<TypedocsService>(TypedocsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
