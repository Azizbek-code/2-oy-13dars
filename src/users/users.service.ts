import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from 'src/auth/dto/update-user.dto';
import { DbService } from 'src/core/database/db.service';

@Injectable()
export class UsersService {

  constructor(private prisma: DbService) { }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateAuthDto) {
    return await this.prisma.user.update({ where: { id: id }, data: updateUserDto });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id: id } });
  }
}
