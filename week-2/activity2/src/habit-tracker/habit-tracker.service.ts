import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HabitTrackerService {
  constructor (private readonly prismaService: PrismaService){}
  async create(createHabitTrackerDto: Prisma.HabitTrackerCreateInput) {
    return this.prismaService.habitTracker.create({
      data: createHabitTrackerDto
    })
  }

  async createUser(HabitUserCreateInput: Prisma.HabitUserCreateInput) {
    return this.prismaService.habitUser.create({
      data: HabitUserCreateInput,
    })
  }

  async findAll() {
    return this.prismaService.habitTracker.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.habitTracker.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateHabitTrackerDto: Prisma.HabitTrackerUpdateInput) {
    return this.prismaService.habitTracker.update({
      where: {
        id,
      },
      data: updateHabitTrackerDto
    })
  }

  async remove(id: number) {
    return this.prismaService.habitTracker.delete({
      where: {
        id: id
      }
    })
  }
}
