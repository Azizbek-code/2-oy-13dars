import { IsInt, IsDateString } from 'class-validator';

export class CreateBorrowDto {
    @IsInt()
    userId: number;

    @IsInt()
    bookId: number;

    @IsDateString()
    borrowDate?: string;

    @IsDateString()
    returnDate?: string;
}
