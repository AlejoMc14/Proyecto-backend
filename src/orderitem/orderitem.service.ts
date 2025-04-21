import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateOrderitemDto } from './dto/create-orderitem.dto';
import { UpdateOrderitemDto } from './dto/update-orderitem.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class OrderitemService extends PrismaClient implements OnModuleInit {
 async onModuleInit() {
    await this.$connect;
  }
  
  create(createOrderitemDto: CreateOrderitemDto) {
    return this.orderItem.create({
      data: createOrderitemDto  
    });
  }

  findAll() {
    return this.orderItem.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    });
  }

  findOne() {
    return this.orderItem.findFirst();
  }

  update(id: string, updateOrderitemDto: UpdateOrderitemDto) {
    return this.orderItem.update(
    {where:{id},
    data: updateOrderitemDto
  });
  }

  remove(id: string) {
    return this.orderItem.delete({where:{id}});
  }
}
