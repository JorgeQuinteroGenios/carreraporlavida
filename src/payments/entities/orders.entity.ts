import {
  CreateDateColumn,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { EntryEntity } from './entries.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  orderId: number;

  @OneToMany(() => EntryEntity, (entry) => entry.order)
  entries: EntryEntity[];

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
