import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliverypersonDto } from './create-deliveryperson.dto';
import { IsBoolean } from 'class-validator';

export class UpdateDeliverypersonDto extends PartialType(CreateDeliverypersonDto) {
    @IsBoolean()
    active: boolean
}
