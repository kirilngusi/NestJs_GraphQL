import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Category } from './model/category.model';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(payload: any): Promise<Category> {
    const newCategory: any = await this.prisma.category.create({
      data: {
        ...payload,
      },
    });
    return newCategory;
  }

  async findAllCategory(payload: any): Promise<Category> {
    const allCategory: any = await this.prisma.category.findMany();

    return allCategory;
  }
}
