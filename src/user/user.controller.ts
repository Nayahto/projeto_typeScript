import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'encontrar todos os usuarios (getAll)' })
  finAll() {
    return this.userservice.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'rota para encontrar usuario por id (getById)' })
  async findOne(@Param('id') id: string): Promise<UserEntitie> {
    return await this.userservice.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'rota de atualização  de usuario (update)' })
  async update(
    @Param('id') id: string,
    @Body() dataUser: updateUser,
  ): Promise<UserEntitie> {
    return await this.userservice.update(id, dataUser);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'rota de remoção de usuario (delete)' })
  async remove(@Param('id') id: string): Promise<UserEntitie> {
    return await this.userservice.remove(id);
  }
}
