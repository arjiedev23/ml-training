import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { Prisma } from '@prisma/client';

@Controller('todolist')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Post()
  create(@Body() createTodolistDto: Prisma.TodoListCreateInput) {
    return this.todolistService.create(createTodolistDto);
  }

  @Get()
  findAll(@Query('status') status?: true | false) {
    return this.todolistService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todolistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodolistDto: Prisma.TodoListUpdateInput) {
    return this.todolistService.update(+id, updateTodolistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todolistService.remove(+id);
  }
}
