import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserEntity } from '../common/decoratiors/user.decorator';

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async chipAccount(@UserEntity() user: User): Promise<User> {
    return user;
  }
}
