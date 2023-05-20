import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from './product.resolver';

describe('ProductService', () => {
  let service: ProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductResolver],
    }).compile();

    service = module.get<ProductResolver>(ProductResolver);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
