import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateAuthDto } from 'src/auth/dto/update-user.dto';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { RoleGuard } from 'src/common/guards/role.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  @Get()
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard, RoleGuard)

  @SetMetadata('roles', ['admin'])
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id/role')
  @UseGuards(JwtGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  update(@Param('id') id: string, @Body() updateUserDto: UpdateAuthDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard, RoleGuard)

  @SetMetadata('roles', ['admin'])
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
