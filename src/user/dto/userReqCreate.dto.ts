import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { UserCreateDto } from "./userCreate.dto";

export class UserReqCreateDto {

  @ApiProperty({ type: UserCreateDto })
  @ValidateNested()
  user: UserCreateDto;
  
}