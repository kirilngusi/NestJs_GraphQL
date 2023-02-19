import { Resolver, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from './entities/auth.entity';

@Resolver((of) => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => [User])
  async findAllUser(): Promise<User[]> {
    return this.authService.findAll();
  }
}
