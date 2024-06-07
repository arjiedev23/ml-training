import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { PrismaModule } from './prisma/prisma.module';
import { ContactListModule } from './contact-list/contact-list.module';

@Module({
  imports: [TodolistModule, PrismaModule, ContactListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
