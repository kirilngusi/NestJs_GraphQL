import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/model/base.model';

@ObjectType('Product')
export class Product extends BaseModel {
  @Field(() => String)
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Float)
  priceSale: number;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  Sold: number;

  @Field(() => Int)
  In_Stock: number;

  @Field(() => Boolean)
  deleted: boolean;
}
