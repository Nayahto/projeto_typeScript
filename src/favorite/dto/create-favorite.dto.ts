import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({ example: '5719655f-cf6b-4ced-83b7-fbd895c6cf30' })
  @IsNotEmpty()
  @IsString()
  userId: string;
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ example: ['8be12888-6352-4684-bcd0-b74f3c1c7d62'] })
  gameId: string[];
}
