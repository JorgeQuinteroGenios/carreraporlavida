import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntryEntity } from '../../payments/entities/entries.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  size: string;

  @OneToMany(() => EntryEntity, (entry) => entry.product)
  entries: EntryEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
