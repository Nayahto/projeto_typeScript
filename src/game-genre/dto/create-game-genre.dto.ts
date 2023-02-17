import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateGameGenreDto {
  @ApiProperty({ example: '2e6617dc-dd12-46dc-9d19-1749b1bcda70' })
  @IsNotEmpty()
  @IsString()
  userId: string;
  @ApiProperty({ example: ['8be12888-6352-4684-bcd0-b74f3c1c7d62'] })
  @IsNotEmpty()
  @IsArray()
  gameId: string[];
  @ApiProperty({ example: ['deed7ee3-5b5c-43d0-bda3-e062cde4e0c6'] })
  @IsNotEmpty()
  @IsArray()
  genreId: string[];
}
