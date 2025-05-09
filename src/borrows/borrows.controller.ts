import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata, Req } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
@Controller('borrows')
export class BorrowsController {
  constructor(private readonly borrowsService: BorrowsService) { }

  @Post()
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  create(@Body() createBorrowDto: CreateBorrowDto) {
    return this.borrowsService.create(createBorrowDto);
  }

  @Get()
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  findAll() {
    return this.borrowsService.findAll();
  }

  @Get('/my')
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles', ['admin', 'user'])
  findOne(@Req() request: Request) {
    //@ts-ignore
    const id = request.user.id
    return this.borrowsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  update(@Param('id') id: string, @Body() updateBorrowDto: UpdateBorrowDto) {
    return this.borrowsService.update(+id, updateBorrowDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  remove(@Param('id') id: string) {
    return this.borrowsService.remove(+id);
  }
}
