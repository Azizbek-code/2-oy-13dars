import { Module } from '@nestjs/common';
import { AuthUsersModule } from './user.auth/users.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BooksModule } from './books/books.module';
import { BorrowsModule } from './borrows/borrows.module';



@Module({
  imports: [AuthUsersModule, AuthModule, CoreModule, BooksModule, BorrowsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
