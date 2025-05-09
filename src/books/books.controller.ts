import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { RoleGuard } from 'src/common/guards/role.guard';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles',['admin'])
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles',['admin'])
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles',['admin'])
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles',['admin'])
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles',['admin'])
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
