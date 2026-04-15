import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty()
  success!: boolean;

  @ApiProperty({ required: false })
  message?: string;

  data!: T;
}
