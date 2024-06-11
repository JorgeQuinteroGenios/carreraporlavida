import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cities')
export class CityEntity {
  @PrimaryColumn()
  cityId: number;

  @Column()
  departmentId: number;

  @Column()
  name: string;
}
