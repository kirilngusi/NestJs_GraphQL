import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../auth/password.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Product } from './model/product.model';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(payload: any): Promise<Product> {
    const newProduct: Product = await this.prisma.product.create({
      data: {
        ...payload,
      },
    });
    return newProduct;
  }
}
