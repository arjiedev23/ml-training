import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodolistService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createTodolistDto: Prisma.TodoListCreateInput) {
    return this.prismaService.todoList.create({
      data: createTodolistDto
    })
  }

  async findAll() {
    return this.prismaService.todoList.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.todoList.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateTodolistDto: Prisma.TodoListUpdateInput) {
    return this.prismaService.todoList.update({
      where: {
        id,
      },
      data: updateTodolistDto
    })
  }

  async remove(id: number) {
    return this.prismaService.todoList.delete({
      where: {
        id,
      }
    })
  }
}
