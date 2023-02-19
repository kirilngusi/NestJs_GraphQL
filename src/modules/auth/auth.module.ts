import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthResolver, PrismaService],
})
export class AuthModule {}
