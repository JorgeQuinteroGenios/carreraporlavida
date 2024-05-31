import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { TeamEntity } from '../../teams/entities/team.entity';
import { TypedocEntity } from '../../typedocs/entities/typedoc.entity';

@Entity('runners')
export class RunnerEntity {
  @PrimaryGeneratedColumn()
  runnerId: number;

  @OneToOne(() => UserEntity, (user) => user.userId)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => TeamEntity, (team) => team.runner)
  team: TeamEntity;

  @ManyToOne(() => TypedocEntity, (typedoc) => typedoc.runner)
  typedoc: TypedocEntity;

  @Column({ unique: true })
  docNumber: string;

  @Column()
  birthday: Date;

  @Column()
  gender: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  eps: string;

  @Column()
  rh: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
