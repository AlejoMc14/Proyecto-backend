import { IsString } from "class-validator";

export class CreateDeliverypersonDto {
    @IsString()
    name:      string;
    @IsString()
    phone:     string;
}
