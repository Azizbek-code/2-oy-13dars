import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-user.dto';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { LoginDto } from './dto/login.user.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.regiter(createAuthDto);
  }
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @UseGuards(JwtGuard)
  async findOne(@Req() request: Request) {
    //@ts-ignore
    const user_id: string = request.user.id
    return await this.authService.findOne(user_id)
  }

}
