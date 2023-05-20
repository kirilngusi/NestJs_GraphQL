import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Parent, ResolveField } from '@nestjs/graphql';
import { Product } from './model/product.model';
import { ProductService } from './product.service';
import { ProductInput } from './dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Mutation(() => Product)
  async createProduct(@Args('data') data: ProductInput) {
    return await this.productService.createProduct(data);
  }
}
