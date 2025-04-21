import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class BusinessService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createBusinessDto: CreateBusinessDto) {
    return this.business.create ({
      data : createBusinessDto
    });
  }

  findAll() {
    return this.business.findMany({
      orderBy:{
        createdAt:'desc'
      }
    });
  }

  findOne() {
    return this.business.findFirst();
  }

  update(id: string, updateBusinessDto: UpdateBusinessDto) {
    return this.business.update({
    where :{id},
    data : updateBusinessDto
  });
  }

  remove(id: string) {
    return this.business.delete({where :{id}});
  }
}
