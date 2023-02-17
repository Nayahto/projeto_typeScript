import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { updateUser } from './dto/updateUser.DTO';
import { UserDTO } from './dto/user.DTO';
import { UserEntitie } from './entities/user.entitie';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  @ApiOperation({ summary: 'rota de criação de usuario (Create)' })
  async create(@Body() userData: UserDTO) {
    return await this.userservice.create(userData);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'encontrar todos os usuarios (findAll)' })
  finAll() {
    return this.userservice.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'rota para encontrar usuario por id (findById)' })
  async findOne(@Param('id') id: string): Promise<UserEntitie> {
    return await this.userservice.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'rota de atualização  de usuario (update)' })
  async update(
    @Param('id') id: string,
    @Body() dataUser: updateUser,
  ): Promise<UserEntitie> {
    return await this.userservice.update(id, dataUser);
  }
  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'rota de remoção de usuario (delete)' })
  async remove(@Param('id') id: string): Promise<UserEntitie> {
    return await this.userservice.remove(id);
  }
}
