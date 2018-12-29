import { Starter, Index } from '../index';

test('starter', () => {
  expect(Starter('Danilo')).toBe('Hello Danilo');
  expect(Index()).toBe('this is a tes');
});
