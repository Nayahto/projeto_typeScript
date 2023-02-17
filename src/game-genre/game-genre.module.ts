import { Module } from '@nestjs/common';
import { GameGenreService } from './game-genre.service';
import { GameGenreController } from './game-genre.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [GameGenreController],
  providers: [GameGenreService],
})
export class GameGenreModule {}
