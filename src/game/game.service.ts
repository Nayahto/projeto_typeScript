import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameEntitie } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGameDto: CreateGameDto): Promise<GameEntitie> {
    const gameData: GameEntitie = { ...createGameDto };
    return await this.prismaService.gameTable.create({ data: gameData });
  }

  findAll() {
    return this.prismaService.gameTable.findMany();
  }

  async findOne(id: string): Promise<GameEntitie> {
    const data = await this.prismaService.gameTable.findUnique({
      where: { id: id },
    });

    if (!data) {
      throw new NotFoundException(
        `o identificador ${id} por isso nao sera possivel prossguir com a operacao`,
      );
    }
    return data;
  }

  async update(id: string, body: UpdateGameDto): Promise<GameEntitie> {
    const dados: Partial<GameEntitie> = { ...body };
    return await this.prismaService.gameTable
      .update({
        where: { id: id },
        data: dados,
      })
      .catch(this.getError);
  }

  async remove(id: string): Promise<GameEntitie> {
    return this.prismaService.gameTable.delete({ where: { id: id } });
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
