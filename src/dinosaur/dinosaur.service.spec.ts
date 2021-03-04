import { DinosaurService } from 'src/dinosaur/dinosaur.service';
import { mock } from 'jest-mock-extended';
import { Repository } from 'typeorm';
import { Dinosaur } from 'src/dinosaur/dinosaur.entity';

type DinosaurRepository = Repository<Dinosaur>;

describe('The dinosaur service', () => {
  let service: DinosaurService;
  const dinoRepoMock = {
    count: jest.fn(),
  };

  beforeAll(() => {
    const dinoRepo = (mock<DinosaurRepository>() as never) as DinosaurRepository;
    service = new DinosaurService(dinoRepo);
    dinoRepo.count = dinoRepoMock.count;
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
