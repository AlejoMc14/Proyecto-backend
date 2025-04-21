import { IsString } from "class-validator";

export class CreateOrderDto {
   @IsString()
    customer:   string;
    @IsString()
    address:    string;
    @IsString()
    total:      string;
    @IsString()
    status:     string;
}
