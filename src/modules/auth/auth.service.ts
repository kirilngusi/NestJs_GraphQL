import { Injectable } from '@nestjs/common';
import { User } from './entities/auth.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthCredentialDto } from './dto/user.dto';
import { SignupInput } from './dto/signup.input';
import { Token } from './model/token.model';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}

  async createUser(payload: SignupInput): Promise<Token> {
    const hashedPassword = await this.passwordService.hashPassword(
      payload.password,
    );

    try {
      const user = await this.prisma.user.create({
        data: {
          ...payload,
          password: hashedPassword,
          role: 'USER',
        },
      });

      return this.generateTokens({
        userId: user.id,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`Email ${payload.email} already used.`);
      }
      throw new Error(e);
    }
  }

  async findAll(): Promise<User[]> {
    const user = new User();

    user.id = 1;
    user.username = 'kiril';

    return [user];
  }
}
