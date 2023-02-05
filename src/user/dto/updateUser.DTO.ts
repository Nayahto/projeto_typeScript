import { PartialType } from '@nestjs/mapped-types';
import { UserDTO } from './user.DTO';

export class updateUser extends PartialType(UserDTO) {}
