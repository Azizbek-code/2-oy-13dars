import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    author: string;
    @IsString()
    @IsNotEmpty()
    isbn: string;
    @IsString()
    @IsNotEmpty()
    quantity?: number;
    @IsString()
    @IsNotEmpty()
    available?: number;
}
