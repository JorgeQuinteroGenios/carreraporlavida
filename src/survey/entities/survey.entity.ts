import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('survey')
export class SurveyEntity {
  @PrimaryGeneratedColumn()
  surveyId: number;

  @Column()
  questionId: number;

  @Column()
  answer: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
