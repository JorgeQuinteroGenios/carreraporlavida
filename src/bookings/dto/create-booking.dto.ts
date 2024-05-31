import { IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
  @IsString()
  address: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;
  @IsString()
  bookingLink: string;
}
