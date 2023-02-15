import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameGenreDto } from './dto/create-game-genre.dto';

@Injectable()
export class GameGenreService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGameGenreDto: CreateGameGenreDto) {
    const data: Prisma.gameGenreRelationCreateInput = {
      userId: { connect: { id: createGameGenreDto.userId } },
      game: {
        connect: createGameGenreDto.gameId.map((gameId) => ({ id: gameId })),
      },
      genre: {
        connect: createGameGenreDto.genreId.map((genreId) => ({ id: genreId })),
      },
    };

    return await this.prismaService.gameGenreRelation
      .create({
        data: data,
      })
      .catch(this.getError);
  }

  findAll() {
    return this.prismaService.gameGenreRelation.findMany({
      select: {
        id: true,
        game: true,
        genre: { select: { name: true } },
        userId: { select: { userName: true } },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.gameGenreRelation.findUnique({
      where: { id: id },
      select: {
        game: { select: { Title: true, Description: true } },
        userId: { select: { userName: true } },
      },
    });
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
