import { CreateFavoriteDto } from '../dto/create-favorite.dto';

export class Favorite {
  userId: string;
  gameId?: CreateFavoriteDto[];
}
