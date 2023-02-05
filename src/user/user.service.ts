import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDTO } from './dto/user.DTO';
import { UserEntities } from './entities/user.entitie';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  allUsers() {
    return this.prismaService.userTable.findMany();
  }

  async allUsersById(id: string): Promise<UserEntities> {
    const data = await this.prismaService.userTable.findUnique({
      where: { id: id },
    });

    if (!data) {
      throw new NotFoundException(
        `o identificador ${id} por isso nao sera possivel prossguir com a operacao`,
      );
    }
    return data;
  }
  async createUser(dto: UserDTO): Promise<UserEntities> {
    const dataUser: UserEntities = { ...dto };
    return await this.prismaService.userTable.create({ data: dataUser });
  }
}
