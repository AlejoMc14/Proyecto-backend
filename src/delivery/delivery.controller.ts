import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';


@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.create(createDeliveryDto);
  }

 
  @Get('')
  findOne(@Param('id') id: string) {
    return this.deliveryService.findOne();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryService.remove(id);
  }
}
