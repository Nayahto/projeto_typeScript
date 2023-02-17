import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { GameGenreService } from './game-genre.service';
import { CreateGameGenreDto } from './dto/create-game-genre.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Game Genre Relation')
@UseGuards(AuthGuard())
@ApiBearerAuth()
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
    summary: 'rota responsavel por encontrar as relações Game/Genre (findAll)',
  })
  findAll() {
    return this.gameGenreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary:
      'rota responsavel por encontrar as relações por identificador Game/Genre (findById)',
  })
  findOne(@Param('id') id: string) {
    return this.gameGenreService.findOne(id);
  }
}
