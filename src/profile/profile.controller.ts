import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiOperation({ summary: 'rota de criação de perfil (Create)' })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  @ApiOperation({
    summary: 'rota para encontrar todos os perfis de usuario (findAll)',
  })
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'rota para encontrar o usuario pelo seu identificador (findById)',
  })
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'rota para atualização de usuario (update)' })
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'rota para deleção de usuario (delete)' })
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
