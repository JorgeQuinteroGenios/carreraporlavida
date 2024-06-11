import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('departments')
export class DepartmentEntity {
  @PrimaryColumn()
  departmentId: number;

  @Column()
  name: string;
}
