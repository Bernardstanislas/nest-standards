import { DinosaurService } from 'src/dinosaur/dinosaur.service';
import { mock } from 'jest-mock-extended';
import { Repository } from 'typeorm';
import { Dinosaur } from 'src/dinosaur/dinosaur.entity';
import { buildSystemUnderTest } from 'test/utils';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('The dinosaur service', () => {
  let service: DinosaurService;
  const dinoRepoMock = mock<Repository<Dinosaur>>();

  beforeAll(async () => {
    service = await buildSystemUnderTest(DinosaurService, {
      provide: getRepositoryToken(Dinosaur),
      useValue: dinoRepoMock,
    });
  });

  it('exists', () => {
    expect(service).toBeDefined();
  });

  describe('checkIfDinosaursStillExist', () => {
    it('counts dinosaurs to answer', async () => {
      // No dino left
      dinoRepoMock.count.mockResolvedValue(0);
      expect(await service.checkIfDinosaursStillExist()).toBe(false);

      // One dino left
      dinoRepoMock.count.mockResolvedValue(1);
      expect(await service.checkIfDinosaursStillExist()).toBe(true);
    });
  });
});
