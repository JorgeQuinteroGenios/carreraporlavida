import { Module } from '@nestjs/common';
import { TypedocsService } from './typedocs.service';
import { TypedocsController } from './typedocs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypedocEntity } from './entities/typedoc.entity';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([TypedocEntity])],
  controllers: [TypedocsController],
  providers: [TypedocsService, JwtStrategy],
})
export class TypedocsModule {}
