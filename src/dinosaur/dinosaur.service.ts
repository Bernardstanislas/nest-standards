import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dinosaur } from 'src/dinosaur/dinosaur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DinosaurService {
  constructor(
    @InjectRepository(Dinosaur) private readonly dinoRepo: Repository<Dinosaur>,
  ) {}

  async checkIfDinosaursStillExist() {
    return (await this.dinoRepo.count()) > 0;
  }
}
