import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RunnerEntity } from '../../runners/entities/runner.entity';

@Entity('teams')
export class TeamEntity {
  @PrimaryGeneratedColumn()
  teamId: number;

  @OneToMany(() => RunnerEntity, (runner) => runner.team)
  runner: RunnerEntity[];

  @Column({ unique: true, type: 'varchar', length: 30 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
