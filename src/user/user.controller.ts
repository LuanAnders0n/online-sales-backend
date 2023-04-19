import { Controller, Body, Post, Get } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interface/user.entity';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<UserEntity[]> {
    return this.userService.getAllUser();
  }
}
