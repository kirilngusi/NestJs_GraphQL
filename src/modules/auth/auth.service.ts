import { Injectable } from '@nestjs/common';
import { User } from './entities/auth.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthCredentialDto } from './dto/user.dto';
import { SignupInput } from './dto/signup.input';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(payload: SignupInput) {
    try {
      const user = await this.prisma.user.create({
          ...payload,
          role: 'USER',
        },
      });

      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async findAll(): Promise<User[]> {
    const user = new User();

    user.id = 1;
    user.username = 'kiril';

    return [user];
  }
}
