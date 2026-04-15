import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseDto } from 'src/shared/dto/response.dto';
import { ApiResponse } from 'src/shared/shell/api.response';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiResponse(User)
  async getAllUsers(
    @Query() query: PaginationDto,
  ): Promise<ResponseDto<User[]>> {
    const { page, limit } = query;
    const data = await this.userService.findAll(page, limit);
    return {
      success: true,
      message: 'Users retrieved successfully',
      data,
    };
  }
}
