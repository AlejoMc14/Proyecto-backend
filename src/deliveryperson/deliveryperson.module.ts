import { Module } from '@nestjs/common';
import { DeliverypersonService } from './deliveryperson.service';
import { DeliverypersonController } from './deliveryperson.controller';

@Module({
  controllers: [DeliverypersonController],
  providers: [DeliverypersonService],
})
export class DeliverypersonModule {}
