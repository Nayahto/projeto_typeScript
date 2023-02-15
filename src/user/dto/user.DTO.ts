import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @ApiProperty({ example: '000.000.000-00' })
  @IsNotEmpty()
  @IsString()
  CPF: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '1234567' })
  Password: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'chico cumbuca' })
  userName: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'chico.cumbuca@gmail.com' })
  email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Admin' })
  role: string;
}
