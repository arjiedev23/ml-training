import { Module } from '@nestjs/common';
import { BookLendingService } from './book-lending.service';
import { BookLendingController } from './book-lending.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BookLendingController],
  providers: [BookLendingService],
})
export class BookLendingModule {}
