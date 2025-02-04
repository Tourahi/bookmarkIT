import { ApiProperty } from "@nestjs/swagger";

import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserCreateDto {

  @ApiProperty({ 
    example: 'username', 
    description: 'The username of the user. <You can authenticate with it>' 
  })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ 
    example: 'test@gmail.com', 
    description: 'The email of the user. <You can authenticate with it>'
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;


  @ApiProperty({ 
    example: 'password', 
    description: 'The password of the User.' 
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;

}
