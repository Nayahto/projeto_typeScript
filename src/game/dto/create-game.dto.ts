import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  Title: string;
  @IsNotEmpty()
  @IsString()
  CoverImageUrl: string;
  @IsNotEmpty()
  @IsString()
  Description: string;
  @IsNotEmpty()
  @IsNumber()
  Year: number;
  @IsNotEmpty()
  @Max(5)
  @Min(0)
  @IsNumber()
  ImdbScore: number;
  @IsNotEmpty()
  @IsString()
  TrailerYouTubeUrl: string;
  @IsNotEmpty()
  @IsString()
  GameplayYouTubeUrl: string;
}
