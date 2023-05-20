import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/model/base.model';

@ObjectType('Category')
export class Category extends BaseModel {
  @Field()
  name: string;
}
