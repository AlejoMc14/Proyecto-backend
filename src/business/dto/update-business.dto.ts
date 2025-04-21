import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessDto } from './create-business.dto';
import { IsBoolean } from 'class-validator';

export class UpdateBusinessDto extends PartialType(CreateBusinessDto) {
    @IsBoolean()
    active : boolean;
}
