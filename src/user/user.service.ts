import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateUser } from './dto/updateUser.DTO';
import { UserDTO } from './dto/user.DTO';
import { UserEntitie } from './entities/user.entitie';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: UserDTO): Promise<UserEntitie> {
    const dataUser: UserEntitie = { ...dto };
    return await this.prismaService.userTable
      .create({ data: dataUser })
      .catch(this.getError);
  }

  findAll() {
    return this.prismaService.userTable.findMany();
  }

  async findOne(id: string): Promise<UserEntitie> {
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
  async update(id: string, body: updateUser): Promise<UserEntitie> {
    const dados: Partial<UserEntitie> = { ...body };
    return await this.prismaService.userTable
      .update({
        where: { id: id },
        data: dados,
      })
      .catch(this.getError);
  }
  async remove(id: string): Promise<UserEntitie> {
    return this.prismaService.userTable.delete({ where: { id: id } });
  }

  getError(error: Error): undefined {
    const errorData = error.message?.split('\n');
    const errorMessage = errorData[errorData.length - 1]?.trim();

    throw new UnprocessableEntityException(
      errorMessage ||
        'erro ocorrido durante a consulte. verifique os dados e tente novamente',
    );
  }
}
