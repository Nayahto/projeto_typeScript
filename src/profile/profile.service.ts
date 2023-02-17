import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    const dataProfile: Prisma.ProfileCreateInput = {
      user: { connect: { id: createProfileDto.userId } },
      Title: createProfileDto.Title,
      ImageURL: createProfileDto.ImageURL,
    };

    return await this.prismaService.profile.create({ data: dataProfile });
  }

  findAll() {
    return this.prismaService.profile.findMany();
  }

  findOne(id: string) {
    return this.prismaService.profile.findUnique({ where: { id: id } });
  }

  async update(
    id: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const dataProfile: Partial<Profile> = { ...updateProfileDto };
    return await this.prismaService.profile.update({
      where: { id: id },
      data: dataProfile,
    });
  }

  remove(id: string) {
    return this.prismaService.profile.delete({ where: { id: id } });
  }
  getError(error: Error): undefined {
    const errorData = error.message?.split('\n');
    const errorMessage = errorData[errorData.length - 1]?.trim();

    throw new UnprocessableEntityException(
      errorMessage ||
        'erro ocorrido durante a consulte. verifique os dados e tente novamente',
    );
  }
}
