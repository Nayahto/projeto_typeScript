import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { ResponseDto } from './dto/response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto): Promise<ResponseDto> {
    const { userCPF, passWord } = loginDto;
    const user = await this.prismaService.userTable.findUnique({
      where: { CPF: userCPF },
    });
    if (passWord !== user.Password) {
      throw new UnauthorizedException('senha ou usuario nao encontrado');
    }
    delete user.Password;
    delete user.id;
    delete user.CPF;

    return {
      token: this.jwtService.sign({ userCPF }),
      user: user,
    };
  }
}
