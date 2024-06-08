import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { PrismaModule } from './prisma/prisma.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { ProductInventoryModule } from './product-inventory/product-inventory.module';
import { HabitTrackerModule } from './habit-tracker/habit-tracker.module';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { BookLendingModule } from './book-lending/book-lending.module';

@Module({
  imports: [TodolistModule, PrismaModule, ContactListModule, ProductInventoryModule, HabitTrackerModule, UsersModule, BookModule, BookLendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
