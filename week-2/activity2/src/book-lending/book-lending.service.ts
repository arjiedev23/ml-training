import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookLendingService {
  constructor (private readonly prismaService: PrismaService){}
  async create(createBookLendingDto: Prisma.BookLendingCreateInput) {
    return this.prismaService.bookLending.create({
      data: createBookLendingDto
    });
  }

  async findAll() {
    return this.prismaService.bookLending.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.bookLending.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateBookLendingDto: Prisma.BookLendingUpdateInput) {
    return this.prismaService.bookLending.update({
      where: {
        id: id
      },
      data: updateBookLendingDto
    });
  }

  async remove(id: number) {
    return this.prismaService.bookLending.delete({
      where: {
        id: id
      }
    });
  }
}
