import { Injectable } from '@nestjs/common';
import { User } from './entities/auth.entity';

@Injectable()
export class AuthService {
  async findAll(): Promise<User[]> {
    const user = new User();

    user.id = 1;
    user.username = 'kiril';

    return [user];
  }
}
