import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { JwtGuard } from '../guards/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Payments')
@UseGuards(JwtGuard)
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('order')
  createOrder(@Body('userId') userId: string) {
    return this.paymentsService.createOrder(userId);
  }

  @Post('entry')
  createEntry(@Body() createEntryDto: CreateEntryDto) {
    return this.paymentsService.createEntry(createEntryDto);
  }

  @Get('order')
  findAllOrder() {
    return this.paymentsService.findAllOrder();
  }

  @Get('order/:orderId')
  findOneOrder(@Param('orderId') orderId: string) {
    return this.paymentsService.findOneOrder(+orderId);
  }

  @Patch('order/:orderId')
  updateOrder(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.paymentsService.updateOrder(+orderId, updateOrderDto);
  }

  @Delete('order/:orderId')
  removeOrder(@Param('orderId') orderId: string) {
    return this.paymentsService.removeOrder(+orderId);
  }

  @Patch('entry/:entryId')
  updateEntry(
    @Param('entryId') entryId: string,
    @Body() updateEntryDto: UpdateEntryDto,
  ) {
    return this.paymentsService.updateEntry(+entryId, updateEntryDto);
  }

  @Delete('entry/:entryId')
  removeEntry(@Param('entryId') entryId: string) {
    return this.paymentsService.removeEntry(+entryId);
  }
}
