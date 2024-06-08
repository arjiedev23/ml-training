import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitTrackerDto } from './create-habit-tracker.dto';

export class UpdateHabitTrackerDto extends PartialType(CreateHabitTrackerDto) {}
