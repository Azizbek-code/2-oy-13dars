import { Injectable } from '@nestjs/common';
import { DbService } from 'src/core/database/db.service';
@Injectable()
export class UsersService {

  constructor(private prisma: DbService){}

  async register(data: any) {
    return await this.prisma.user.create({data:data});
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id :string) {
    return await this.prisma.user.findFirst({
      where: {
        id: +id
      }
    });
  }

  async findUserByEmail(email:string) {
    return await this.prisma.user.findUnique({
      where: {
        email:email
      }
    })
  }

}
