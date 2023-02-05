import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { updateUser } from './dto/updateUser.DTO';
import { UserDTO } from './dto/user.DTO';
import { UserEntities } from './entities/user.entitie';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  @Get()
  @ApiOperation({ summary: 'encontrar todos os usuarios (getAll)' })
  allUsers() {
    return this.userservice.allUsers();
  }
  @Get(':id')
  @ApiOperation({ summary: 'rota para encontrar usuario por id (getById)' })
  async allUsersById(@Param('id') id: string): Promise<UserEntities> {
    return await this.userservice.allUsersById(id);
  }
  @Post('new')
  @ApiOperation({ summary: 'rota de criação de usuario (Create)' })
  async createUser(@Body() userData: UserDTO) {
    return await this.userservice.createUser(userData);
  }
  @Patch('update/:id')
  @ApiOperation({ summary: 'rota de atualização  de usuario (update)' })
  async updateUser(
    @Param('id') id: string,
    @Body() dataUser: updateUser,
  ): Promise<UserEntities> {
    return await this.userservice.updateUser(id, dataUser);
  }
  @Delete('delete/:id')
  @ApiOperation({ summary: 'rota de deleção de usuario (delete)' })
  async deleteUser(@Param('id') id: string): Promise<UserEntities> {
    return await this.userservice.deleteUser(id);
  }
}
