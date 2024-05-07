import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {

  @ApiProperty({ type: 'integer' })
  id: number;

  @ApiProperty({ type: 'string' })
  username: string;

  @ApiProperty({ type: 'string' })
  email: string;

  @ApiProperty({ type: 'string' })
  password: string;

}
