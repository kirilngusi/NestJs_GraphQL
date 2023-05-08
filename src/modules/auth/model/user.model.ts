import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { BaseModel } from '../../common/model/base.model';
import { Role } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  fullName?: string;

  @Field(() => String, { nullable: true })
  phone_number?: string;

  @Field(() => Role)
  role: Role;

  @HideField()
  password: string;
}
