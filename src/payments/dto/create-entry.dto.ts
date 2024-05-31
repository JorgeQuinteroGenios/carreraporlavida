import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEntryDto {
  @IsNumber()
  productId: number;
  @IsNumber()
  orderId: number;
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
