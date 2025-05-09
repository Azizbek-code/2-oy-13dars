import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthUsersModule } from 'src/user.auth/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthUsersModule,
    JwtModule.register({
      global: true,
      secret: 'awdo awdo iajdaijwd oadqw; ndqwd qdo qin',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
