import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  createUser(
    @Body('name') name: string,
    @Body('password') password: string,
    @Body('email') email: string,
    @Body('role') role: string,
  ): any {
    return this.usersService.insertUser(name, password, email, role);
  }
}
