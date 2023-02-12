import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GameGenreService } from './game-genre.service';
import { CreateGameGenreDto } from './dto/create-game-genre.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Game Genre Relation')
@Controller('game-genre')
export class GameGenreController {
  constructor(private readonly gameGenreService: GameGenreService) {}

  @Post()
  @ApiOperation({ summary: 'rota de criação da relação Game/Genre (Create)' })
  create(@Body() createGameGenreDto: CreateGameGenreDto) {
    return this.gameGenreService.create(createGameGenreDto);
  }

  @Get()
  @ApiOperation({
    summary: 'rota responsavel por encontrar as relações Game/Genre (finAll)',
  })
  findAll() {
    return this.gameGenreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary:
      'rota responsavel por encontrar as relações por identificador Game/Genre (finAll)',
  })
  findOne(@Param('id') id: string) {
    return this.gameGenreService.findOne(id);
  }
}
