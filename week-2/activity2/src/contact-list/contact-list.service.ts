import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactListService {
  constructor (private readonly prismaService: PrismaService){}
  async create(createContactListDto: Prisma.ContactListCreateInput) {
    return this.prismaService.contactList.create({
      data : createContactListDto
    })
  }

  async findAll(search: string) {
    return this.prismaService.contactList.findMany({
      where: {
        contactFullName: {
          contains: search,
          mode: 'insensitive'
        }
      }
    })
  }

  async findOne(id: number) {
    return this.prismaService.contactList.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateContactListDto: Prisma.ContactListUpdateInput) {
    return this.prismaService.contactList.update({
      where: {
        id
      },
      data: updateContactListDto
    })
  }

  async remove(id: number) {
    return this.prismaService.contactList.delete({
      where: {
        id
      }
    })
  }
}
