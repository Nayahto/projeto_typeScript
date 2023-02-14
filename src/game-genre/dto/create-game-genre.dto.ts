import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateGameGenreDto {
  @IsNotEmpty()
  @IsString()
  userId: string;
  @IsNotEmpty()
  @IsArray()
  gameId: string[];
  @IsNotEmpty()
  @IsArray()
  genreId: string[];
}
