import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { updateUser } from './dto/updateUser.DTO';
import { UserDTO } from './dto/user.DTO';
import { UserEntities } from './entities/user.entitie';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  @Get()
  @ApiOperation({ summary: 'encontrar todos os usuarios' })
  allUsers() {
    return this.userservice.allUsers();
  }
  @Get(':id')
  @ApiOperation({ summary: 'encontrar usuario por id' })
  async allUsersById(@Param('id') id: string): Promise<UserEntities> {
    return await this.userservice.allUsersById(id);
  }
  @Post('new')
  @ApiOperation({ summary: 'criação de usuario' })
  async createUser(@Body() userData: UserDTO) {
    return await this.userservice.createUser(userData);
  }
  @Patch('update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() dataUser: updateUser,
  ): Promise<UserEntities> {
    return await this.userservice.updateUser(id, dataUser);
  }
}
