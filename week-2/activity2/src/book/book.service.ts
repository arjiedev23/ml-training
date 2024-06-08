import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor (private readonly prismaService: PrismaService){}
  async create(createBookDto: Prisma.BookCreateInput) {
    return this.prismaService.book.create({
      data: createBookDto
    });
  }

  async findAll() {
    return this.prismaService.book.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.book.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateBookDto: Prisma.BookUpdateInput) {
    return this.prismaService.book.update({
      where: {
        id,
      },
      data: updateBookDto
    });
  }

  async remove(id: number) {
    return this.prismaService.book.delete({
      where: {
        id,
      }
    });
  }
}
