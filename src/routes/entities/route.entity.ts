import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('routes')
export class RouteEntity {
  @PrimaryGeneratedColumn()
  routeId: number;

  @Column()
  name: string;

  @Column()
  distance: number;

  @Column()
  apiLink: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
