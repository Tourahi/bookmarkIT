import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { UserLoginDto } from "./userLogin.dto";

export class UserReqLoginDto {

  @ApiProperty({ type: UserLoginDto })
  @ValidateNested()
  user: UserLoginDto;
  
}