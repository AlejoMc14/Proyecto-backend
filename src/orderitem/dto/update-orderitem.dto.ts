import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderitemDto } from './create-orderitem.dto';
import { IsBoolean } from 'class-validator';

export class UpdateOrderitemDto extends PartialType(CreateOrderitemDto) {
    @IsBoolean()
    active: boolean;

}
