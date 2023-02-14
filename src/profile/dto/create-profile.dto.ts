import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  Title: string;
  @IsNotEmpty()
  @IsString()
  ImageURL: string;
}
