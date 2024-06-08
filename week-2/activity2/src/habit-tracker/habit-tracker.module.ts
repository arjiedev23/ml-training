import { Module } from '@nestjs/common';
import { HabitTrackerService } from './habit-tracker.service';
import { HabitTrackerController } from './habit-tracker.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HabitTrackerController],
  providers: [HabitTrackerService],
})
export class HabitTrackerModule {}
