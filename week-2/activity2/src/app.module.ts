import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { PrismaModule } from './prisma/prisma.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { ProductInventoryModule } from './product-inventory/product-inventory.module';
import { HabitTrackerModule } from './habit-tracker/habit-tracker.module';

@Module({
  imports: [TodolistModule, PrismaModule, ContactListModule, ProductInventoryModule, HabitTrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
