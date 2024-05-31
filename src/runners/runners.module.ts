import { Module } from '@nestjs/common';
import { RunnersService } from './runners.service';
import { RunnersController } from './runners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RunnerEntity } from './entities/runner.entity';
import { UserEntity } from '../users/entities/user.entity';
import { TypedocEntity } from '../typedocs/entities/typedoc.entity';
import { TeamEntity } from '../teams/entities/team.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RunnerEntity,
      UserEntity,
      TypedocEntity,
      TeamEntity,
      PassportModule,
    ]),
  ],
  controllers: [RunnersController],
  providers: [RunnersService, JwtStrategy],
})
export class RunnersModule {}
