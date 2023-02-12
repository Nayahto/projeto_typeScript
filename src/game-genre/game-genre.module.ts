import { Module } from '@nestjs/common';
import { GameGenreService } from './game-genre.service';
import { GameGenreController } from './game-genre.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GameGenreController],
  providers: [GameGenreService],
})
export class GameGenreModule {}
