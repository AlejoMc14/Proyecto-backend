import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class OrderService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect;
  }
  create(createOrderDto: CreateOrderDto) {
    return this.order.create({
      data: createOrderDto
    })
  }

  findOne() {
    return this.order.findFirst;
  }

  remove(id:string) {
    return this.order.delete({where:{id}});
  }
}
