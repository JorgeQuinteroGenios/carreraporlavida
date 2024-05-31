import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  createProduct(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  findAllProduct() {
    return this.productRepository.find();
  }

  findOneProduct(productId: number) {
    return this.productRepository.findOne({
      where: { productId },
    });
  }

  updateProduct(productId: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update({ productId }, updateProductDto);
  }

  removeProduct(productId: number) {
    return this.productRepository.delete({ productId });
  }
}
