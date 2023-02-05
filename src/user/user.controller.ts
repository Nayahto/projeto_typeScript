import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  @Get()
  @ApiOperation({ summary: 'encontrar todos os usuarios' })
  allUsers() {
    return this.userservice.allUsers();
  }
}
