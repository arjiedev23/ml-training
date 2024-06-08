import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookLendingService } from './book-lending.service';
import { CreateBookLendingDto } from './dto/create-book-lending.dto';
import { UpdateBookLendingDto } from './dto/update-book-lending.dto';

@Controller('book-lending')
export class BookLendingController {
  constructor(private readonly bookLendingService: BookLendingService) {}

  @Post()
  create(@Body() createBookLendingDto: CreateBookLendingDto) {
    return this.bookLendingService.create(createBookLendingDto);
  }

  @Get()
  findAll() {
    return this.bookLendingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookLendingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookLendingDto: UpdateBookLendingDto) {
    return this.bookLendingService.update(+id, updateBookLendingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookLendingService.remove(+id);
  }
}
