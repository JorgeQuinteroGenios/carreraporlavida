import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteEntity } from './entities/route.entity';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([RouteEntity])],
  controllers: [RoutesController],
  providers: [RoutesService, JwtStrategy],
})
export class RoutesModule {}
