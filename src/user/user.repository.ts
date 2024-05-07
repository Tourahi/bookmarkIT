import { PrismaService } from '@app/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { UserCreateDto } from '@app/user/dto/userCreate.dto'
import { UserEntity } from '@app/user/entity/user.entity'
import { UserUpdateDto } from '@app/user/dto/userUpdateDto'
import { Tpx } from '@app/common/common.type'


@Injectable()
export class UserRepository {

  constructor(private prisma: PrismaService) {}

  async createUser(
    userCreateDto: UserCreateDto,
    prisma: Tpx = this.prisma 
  ): Promise<UserEntity> {
    return await prisma.user.create({
      data: {
        ...userCreateDto
      }
    })
  }

  async updateUser(
    id: number,
    data: UserUpdateDto,
    prisma: Tpx = this.prisma
  ): Promise<UserEntity> {
    const where = {
      id
    };

    return await prisma.user.update({
      where,
      data
    });
  }

  async getUserById(
    id: number,
    prisma: Tpx = this.prisma
  ): Promise<UserEntity | null> {
    const where = {
      id
    }

    return await prisma.user.findUnique({
      where 
    });
  }

  async getUserByName(
    username: string,
    prisma: Tpx = this.prisma
  ): Promise<UserEntity | null> {
    const where = {
      username
    }

    return await prisma.user.findUnique({
      where 
    });
  }


  async getUserByEmail(
    email: string,
    prisma: Tpx = this.prisma
  ): Promise<UserEntity | null> {
    const where = {
      email
    }

    return await prisma.user.findUnique({
      where 
    });
  }


  async getUserByEmailOrName(
    username: string,
    email: string,
    prisma: Tpx = this.prisma
  ): Promise<UserEntity | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email
          },
          {
            username
          }
        ]
      }
    });

    return user;
  }

}