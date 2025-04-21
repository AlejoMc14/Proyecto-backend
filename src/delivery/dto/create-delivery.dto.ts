import { IsString } from "class-validator";

export class CreateDeliveryDto {
    @IsString()
    order:        string;
    @IsString()
    deliveryPerson: string;
    @IsString()
    status:       string;
}
