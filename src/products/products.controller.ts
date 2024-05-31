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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtGuard } from '../guards/jwt.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtGuard)
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get()
  findAllProduct() {
    return this.productsService.findAllProduct();
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return this.productsService.findOneProduct(+id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(+id, updateProductDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.productsService.removeProduct(+id);
  }
}
