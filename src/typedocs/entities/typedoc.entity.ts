import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RunnerEntity } from '../../runners/entities/runner.entity';

@Entity('typedocs')
export class TypedocEntity {
  @PrimaryGeneratedColumn()
  typeId: number;

  @Column()
  name: string;

  @OneToMany(() => RunnerEntity, (runner) => runner.typedoc)
  runner: RunnerEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
