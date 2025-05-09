import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user.auth/users.service';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwtService: JwtService) { }

  async regiter(data: any) {
    const user: any = await this.users.findUserByEmail(data.email)

    if (user) {
      throw new BadRequestException('email is alredy exists')
    }
    const hashedPassword = await bcrypt.hash(data.password, 12)
    data.password = hashedPassword
    const create: any = await this.users.register(data)
    const { password, ...result } = create

    const access_token = await this.jwtService.signAsync(result);

    return { access_token }
  }

  async login(data: any) {
    const user: any = await this.users.findUserByEmail(data.email)
    if (!user) {
      throw new UnauthorizedException()
    }
    const comparePassword = await bcrypt.compare(data.password, user.password)
    if (!comparePassword) {
      throw new BadRequestException()
    }
    const { password, ...result } = user

    const access_token = await this.jwtService.signAsync(result);

    return { access_token }
  }

  async findOne(id: string) {
    return await this.users.findOne(id);
  }

}
