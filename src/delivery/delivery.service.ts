import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DeliveryService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect;
  }
  create(createDeliveryDto: CreateDeliveryDto) {
    return this.delivery.create({
      data: createDeliveryDto
    });
  }

  findOne() {
    return this.delivery.findFirst;
  }

  remove(id: string) {
    return this.delivery.delete({where:{id}});
  }
}
