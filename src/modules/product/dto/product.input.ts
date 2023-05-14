import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => Float, { defaultValue: 0 })
  @IsNotEmpty()
  price: number;

  @Field(() => Float, { defaultValue: 0 })
  @IsNotEmpty()
  priceSale: number;

  @Field(() => String)
  @MinLength(10)
  description: string;

  @Field(() => Int, { defaultValue: 0 })
  Sold: number;

  @Field(() => Int, { defaultValue: 0 })
  In_Stock: number;
}
