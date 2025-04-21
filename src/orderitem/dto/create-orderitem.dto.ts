import { IsString } from "class-validator";

export class CreateOrderitemDto {  
    @IsString()
    product:   string;
    @IsString()
    quantity:  string;
}
