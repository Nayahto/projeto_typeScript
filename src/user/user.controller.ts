import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
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
}
