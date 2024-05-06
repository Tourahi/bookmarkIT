
import { HttpExceptionCustom } from '@app/common/common.exception';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UserCheck {

  isExistUser(bool: boolean): boolean {
    if (!bool) {
      throw new HttpExceptionCustom(
        'User not found', 
        HttpStatus.NOT_FOUND
      );
    }
    return true;
  }

  isUniqueUser(bool: boolean): boolean {
    if (!bool) {
      throw new HttpExceptionCustom(
        'Email or username are taken', 
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
    return true;
  }

  isValidPassword(bool: boolean): boolean {
    if (!bool) {
      throw new HttpExceptionCustom(
        'Password is invalid', 
        HttpStatus.BAD_REQUEST
      );
    }
    return true;
  }

}