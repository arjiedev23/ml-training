import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodolistModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}