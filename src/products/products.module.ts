import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
  providers: [ProductsService, JwtStrategy],
})
export class ProductsModule {}
