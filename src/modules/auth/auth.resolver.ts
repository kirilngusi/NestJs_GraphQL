import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from './entities/auth.entity';
import { AuthCredentialDto } from './dto/user.dto';
import { Parent, ResolveField } from '@nestjs/graphql';
import { SignupInput } from './dto/signup.input';
import { Auth } from './model/auth.model';

@Resolver((of) => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupInput) {
    data.email = data.email.toLowerCase();
    const { accessToken, refreshToken } = await this.authService.createUser(
      data,
    );
    return {
      accessToken,
      refreshToken,
    };
  }
}
