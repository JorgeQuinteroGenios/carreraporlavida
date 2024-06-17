import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { EntryEntity } from './entities/entries.entity';
import { UserEntity } from '../users/entities/user.entity';
import { ProductEntity } from '../products/entities/product.entity';
import * as process from 'node:process';
import { timestamp } from 'rxjs';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(EntryEntity)
    private readonly entryRepository: Repository<EntryEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createOrder(userId: string) {
    const userFound = await this.userRepository.findOneBy({
      userId: userId,
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    const newOrder = this.orderRepository.create();
    newOrder.user = userFound;

    return this.orderRepository.save(newOrder);
  }

  async createEntry(createEntryDto: CreateEntryDto) {
    const productFound = await this.productRepository.findOneBy({
      productId: createEntryDto.productId,
    });

    if (!productFound) {
      throw new NotFoundException();
    }

    const orderFound = await this.orderRepository.findOneBy({
      orderId: createEntryDto.orderId,
    });

    if (!orderFound) {
      throw new NotFoundException();
    }

    const newEntry = await this.entryRepository.save(createEntryDto);
    const savedEntry = await this.entryRepository.save(newEntry);
    savedEntry.product = productFound;
    savedEntry.order = orderFound;

    return this.entryRepository.save(savedEntry);
  }

  findAllOrder() {
    return this.orderRepository.find({
      relations: ['user', 'entries'],
    });
  }

  findOneOrder(orderId: number) {
    return this.orderRepository.findOne({
      where: { orderId },
      relations: ['user', 'entries'],
    });
  }

  updateOrder(orderId: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update({ orderId }, updateOrderDto);
  }

  removeOrder(orderId: number) {
    return this.orderRepository.delete({ orderId });
  }

  updateEntry(entryId: number, updateEntryDto: UpdateEntryDto) {
    return this.entryRepository.update({ entryId }, updateEntryDto);
  }

  removeEntry(entryId: number) {
    return this.entryRepository.delete({ entryId });
  }

  async wompiPay(value: string, userId: string) {
    const publicKey = process.env.COMMERCE_PUBLIC_KEY;
    const integrityKey = process.env.COMMERCE_INTEGRITY_KEY;
    const time = Date.now();
    const reference = userId + time;
    const currency = 'COP';
    const concatKey = reference + value + currency + integrityKey;
    const encondedText = new TextEncoder().encode(concatKey);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const signature = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return {
      publicKey,
      currency,
      value,
      reference,
      signature,
    };
  }
}
