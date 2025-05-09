import { Injectable } from '@nestjs/common';
import { DbService } from 'src/core/database/db.service';

@Injectable()
export class BorrowsService {
  constructor(private prisma: DbService) { }
  async create(data: any) {
    return await this.prisma.borrow.create({ data: data })
  }

  async findAll() {
    return await this.prisma.borrow.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.borrow.findUnique({ where: { id: id } })
  }

  async update(id: number, data: any) {
    return await this.prisma.borrow.update({ where: { id: id }, data: data })
  }

  async remove(id: number) {
    return await this.prisma.borrow.delete({ where: { id: id } })
  }
}
