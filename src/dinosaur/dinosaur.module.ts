import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dinosaur } from 'src/dinosaur/dinosaur.entity';
import { DinosaurService } from 'src/dinosaur/dinosaur.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dinosaur])],
  providers: [DinosaurService],
})
export class DinosaurModule {}
