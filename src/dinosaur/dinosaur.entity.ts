import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dinosaur {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
