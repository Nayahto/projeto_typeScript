import { PartialType } from '@nestjs/swagger';
import { CreateGameGenreDto } from './create-game-genre.dto';

export class UpdateGameGenreDto extends PartialType(CreateGameGenreDto) {}
