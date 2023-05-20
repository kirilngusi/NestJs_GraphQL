import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Category } from './model/category.model';
import { CategoryService } from './category.service';
import { CategoryInput } from './dto/category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Mutation(() => Category)
  async createProduct(@Args('data') data: CategoryInput) {
    return await this.categoryService.createCategory(data);
  }

  @Query(() => Category)
  async findAllCategory() {
    return await this.categoryService.findAllCategory({ data: '1' });
  }
}
