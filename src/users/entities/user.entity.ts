import {
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {OrderEntity} from "../../payments/entities/orders.entity";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @OneToMany(() => OrderEntity, (orders) => orders.user)
  orders: OrderEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
