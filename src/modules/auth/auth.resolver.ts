import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from './entities/auth.entity';
import { AuthCredentialDto } from './dto/user.dto';
import { Parent, ResolveField } from '@nestjs/graphql';
import { SignupInput } from './dto/signup.input';

@Resolver((of) => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => [User])
  async findAllUser(): Promise<User[]> {
    return this.authService.findAll();
  }

  @Mutation(() => AuthCredentialDto)
  async signup(@Args('data') data: SignupInput) {
    data.email = data.email.toLowerCase();
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return {
      accessToken,
      refreshToken,
    };
  }
}
