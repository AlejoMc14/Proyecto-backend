import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateDeliverypersonDto } from './dto/create-deliveryperson.dto';
import { UpdateDeliverypersonDto } from './dto/update-deliveryperson.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DeliverypersonService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect;
  }
  create(createDeliverypersonDto: CreateDeliverypersonDto) {
    return this.deliveryPerson.create({
      data: createDeliverypersonDto
    });
  }
  findOne() {
    return this.deliveryPerson.findFirst;
  }

  update(id: string, updateDeliverypersonDto: UpdateDeliverypersonDto) {
    return this.deliveryPerson.update({
      where: {id},
      data: updateDeliverypersonDto
    });
  }

  remove(id: string) {
    return this.deliveryPerson.delete({where:{id}});
  }
}
