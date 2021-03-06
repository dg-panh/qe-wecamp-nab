// Note: Sut means System Under Test,
// which saves us from having to give it a unique name each time
import { addTwoNumber } from '../src/simple';

// First check the happy path - the normal inputs expected to get an output

describe('the Add Two Number function', () => {

  test('Adding 0 and 0 should equal 0', () => {
    expect(addTwoNumber(0, 0)).toEqual(0);
  });

  test('Adding 0 and 1 should equal 1', () => {
    expect(addTwoNumber(0, 1)).toEqual(1);
  });

  test('Adding 1 and 1 should equal 2', () => {
    expect(addTwoNumber(1, 1)).toEqual(2);
  });

  test('Adding 1000 and 1000 should equal 2000', () => {
    expect(addTwoNumber(1000, 1000)).toEqual(2000);
  });

  // Now check the sad path - both extreme and strange inputs and what output they should give

  test('Adding 100000000000000000 and 100000000000000000 should equal 200000000000000000', () => {
    expect(addTwoNumber(100000000000000000, 100000000000000000)).toEqual(200000000000000000);
  });

  test('Adding false and false should equal false', () => {
    expect(addTwoNumber(false, false)).toEqual(false);
  });

  test('Adding null and null should equal false', () => {
    expect(addTwoNumber(null, null)).toEqual(false);
  });

  test('Adding undefined and undefined should equal false', () => {
    expect(addTwoNumber(undefined, undefined)).toEqual(false);
  });

  test('Adding NaN and NaN should equal false', () => {
    expect(addTwoNumber(NaN, NaN)).toEqual(false);
  });

})