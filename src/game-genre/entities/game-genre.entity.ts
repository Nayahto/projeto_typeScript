import { CreateGameDto } from 'src/game/dto/create-game.dto';
import { CreateGenreDto } from 'src/genre/dto/create-genre.dto';
import { UserEntitie } from 'src/user/entities/user.entitie';

export class GameGenre {
  id?: string;
  user: UserEntitie;
  games: CreateGameDto[];
  genre: CreateGenreDto[];
}
