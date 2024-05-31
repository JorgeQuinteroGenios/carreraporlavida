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
}
