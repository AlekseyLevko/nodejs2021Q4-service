import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  description!: string;

  @Column({ type: 'uuid', nullable: true })
  userId!: string | null;

  @Column({ type: 'uuid', nullable: true })
  boardId!: string | null;

  @Column({ type: 'uuid', nullable: true })
  columnId!: string | null;
}
