import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliverypersonService } from './deliveryperson.service';
import { CreateDeliverypersonDto } from './dto/create-deliveryperson.dto';
import { UpdateDeliverypersonDto } from './dto/update-deliveryperson.dto';

@Controller('deliveryperson')
export class DeliverypersonController {
  constructor(private readonly deliverypersonService: DeliverypersonService) {}

  @Post()
  create(@Body() createDeliverypersonDto: CreateDeliverypersonDto) {
    return this.deliverypersonService.create(createDeliverypersonDto);
  }



  @Get('')
  findOne(@Param('id') id: string) {
    return this.deliverypersonService.findOne();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliverypersonDto: UpdateDeliverypersonDto) {
    return this.deliverypersonService.update(id, updateDeliverypersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverypersonService.remove(id);
  }
}
