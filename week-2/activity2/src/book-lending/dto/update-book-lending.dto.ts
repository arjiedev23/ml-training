import { PartialType } from '@nestjs/mapped-types';
import { CreateBookLendingDto } from './create-book-lending.dto';

export class UpdateBookLendingDto extends PartialType(CreateBookLendingDto) {}
