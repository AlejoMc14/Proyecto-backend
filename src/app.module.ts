import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BusinessModule } from './business/business.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderitemModule } from './orderitem/orderitem.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliverypersonModule } from './deliveryperson/deliveryperson.module';

@Module({
  imports: [UserModule, BusinessModule, ProductModule, OrderModule, OrderitemModule, DeliveryModule, DeliverypersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
