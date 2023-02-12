import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Genre')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiOperation({ summary: 'rota de criação de generos (Create)' })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @Get()
  @ApiOperation({
    summary:
      'rota responsavel por retornar todos os generos de jogos (findAll)',
  })
  findAll() {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary:
      'rota responsavel por retornar o genero por identificador (finById)',
  })
  findOne(@Param('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'rota responsavel pela atualização dos generos (update)',
  })
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(id, updateGenreDto);
  }
}
