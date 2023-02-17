import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';
import { GameGenreModule } from './game-genre/game-genre.module';
import { AuthModule } from './auth/auth.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [UserModule, PrismaModule, GameModule, ProfileModule, GenreModule, GameGenreModule, AuthModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
