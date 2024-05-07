 import { ApiProperty } from "@nestjs/swagger";
 import { IsEmail, IsOptional, IsString, MinLength, isString } from "class-validator";

 export class UserUpdateDto {

  @ApiProperty({
    example: 'username',
    description:'The User userame.',
    required: false
  })
  @IsOptional()
  readonly username?: string;


  @ApiProperty({
    example: 'email',
    description:'The User email.',
    required: false
  })
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty({
    example: 'password',
    description:'The User password.',
    required: false
  })
  @IsString()
  @MinLength(8)
  @IsOptional()
  password?: string;


  @ApiProperty({
    example: 'passwordNew',
    description:'The new User password.',
    required: false
  })
  @IsString()
  @MinLength(8)
  @IsOptional()
  passwordNew?: string;

 }