import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('eps')
export class EpsEntity {
  @PrimaryColumn()
  epsId: number;

  @Column()
  name: string;
}
