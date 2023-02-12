import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @ApiOperation({ summary: 'rota para criação de jogos' })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  @ApiOperation({ summary: 'rota para consulta de todos os jogos' })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'rota para encontrar um jogo especificado pelo seu id',
  })
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'rota para atualização de jogos' })
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'rota para remoção de jogos' })
  remove(@Param('id') id: string) {
    return this.gameService.remove(id);
  }
}
