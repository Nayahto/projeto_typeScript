import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { GenreEntitie } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGenreDto: CreateGenreDto) {
    const dataGenre: GenreEntitie = { ...createGenreDto };
    return await this.prismaService.genre
      .create({ data: dataGenre })
      .catch(this.getError);
  }

  findAll() {
    return this.prismaService.genre.findMany();
  }

  findOne(id: string) {
    return this.prismaService.genre.findUnique({ where: { id: id } });
  }

  async update(id: string, updateGenreDto: UpdateGenreDto) {
    const dataGenre: Partial<GenreEntitie> = { ...updateGenreDto };
    return await this.prismaService.genre
      .update({
        where: { id: id },
        data: dataGenre,
      })
      .catch(this.getError);
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
