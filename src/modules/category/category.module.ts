import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModule {}
