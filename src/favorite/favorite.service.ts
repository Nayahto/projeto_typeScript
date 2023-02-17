import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createFavoriteDto: CreateFavoriteDto) {
    const profileData: Prisma.favoriteCreateInput = {
      profileId: { connect: { id: createFavoriteDto.userId } },
      game: {
        connect: createFavoriteDto.gameId.map((gameId) => ({ id: gameId })),
      },
    };
    return await this.prismaService.favorite.create({ data: profileData });
  }

  findAll() {
    return this.prismaService.favorite.findMany({
      select: { profileId: { select: { id: true, Title: true } }, game: true },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.favorite.findUnique({
      where: { favId: id },
      select: {
        profileId: {
          select: { Title: true },
        },
        game: { select: { Title: true } },
      },
    });
  }

  update(id: string, updateFavoriteDto: UpdateFavoriteDto) {
    const profileData: Prisma.favoriteCreateInput = {
      profileId: { connect: { id: updateFavoriteDto.userId } },
      game: {
        connect: updateFavoriteDto.gameId.map((gameId) => ({ id: gameId })),
      },
    };

    return this.prismaService.favorite.update({
      where: { favId: id },
      data: profileData,
    });
  }

  remove(id: string) {
    return this.prismaService.favorite.delete({ where: { favId: id } });
  }
}
