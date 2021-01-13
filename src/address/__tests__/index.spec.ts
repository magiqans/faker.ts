import { Faker } from '../../core';
import * as address from '../index';

test(`city decorator`, () => {
  const spy = jest.fn(address.city);
  @Faker()
  class Test {
    @spy()
    property!: string;
  }

  const instance = new Test();

  expect(instance.property).toBeDefined();
  expect(spy).toHaveBeenCalledTimes(1);
});

test(`city decorator with always random option`, () => {
  const spy = jest.fn(address.city);
  @Faker()
  class Test {
    @spy({ alwaysRandom: true })
    property!: string;
  }

  const instance = new Test();
  const first = instance.property;

  expect(first).toBeDefined();
  expect(first).not.toBe(instance.property);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith({ alwaysRandom: true });
});
