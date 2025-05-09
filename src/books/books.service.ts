import { Injectable } from '@nestjs/common';
import { DbService } from 'src/core/database/db.service';

@Injectable()
export class BooksService {
  constructor(private prisma: DbService) { }
  async create(data: any) {
    return await this.prisma.book.create({ data: data });
  }

  async findAll() {
    return await this.prisma.book.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.book.findUnique({ where: { id: id } });
  }

  async update(id: number, data: any) {
    return await this.prisma.book.update({ where: { id: id }, data: data })
  }

  async remove(id: number) {
    return await this.prisma.book.delete({ where: { id: id } });
  }
}
