import { Provider } from '@nestjs/common';
import { Test } from '@nestjs/testing';

interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

export async function buildSystemUnderTest<SystemUnderTest>(
  systemUnderTest: Type<SystemUnderTest>,
  ...dependencies: Provider[]
) {
  const moduleRef = await Test.createTestingModule({
    providers: [systemUnderTest, ...dependencies],
  }).compile();
  return moduleRef.get<SystemUnderTest>(systemUnderTest);
}
