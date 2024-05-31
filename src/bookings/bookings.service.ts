import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(BookingEntity)
    private readonly bookingRepository: Repository<BookingEntity>,
  ) {}

  createBooking(createBookingDto: CreateBookingDto) {
    const newBooking = this.bookingRepository.create(createBookingDto);
    return this.bookingRepository.save(newBooking);
  }

  findAllBooking() {
    return this.bookingRepository.find();
  }

  findOneBooking(bookingId: number) {
    return this.bookingRepository.findOne({
      where: { bookingId },
    });
  }

  updateBooking(bookingId: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepository.update({ bookingId }, updateBookingDto);
  }

  removeBooking(bookingId: number) {
    return this.bookingRepository.delete({ bookingId });
  }
}
