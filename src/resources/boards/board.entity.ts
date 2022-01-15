import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('jsonb')
  columns!: { id: string; title: string; order: number }[];
}
