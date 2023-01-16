'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
  
  test('should be a zero', () => {
    expect(getHumanAge (0, 0))
      .toEqual([0, 0]);
  });
  
  test('if animals age is 14, should be 0', () => {
    expect(getHumanAge (14, 14))
      .toEqual([0, 0]);
  });
  
  test('if animals age is 15, should be 1', () => {
    expect(getHumanAge (15, 15))
      .toEqual([1, 1]);
  });
  
  test('if animals age is 23, should be 1', () => {
    expect(getHumanAge (23, 23))
      .toEqual([1, 1]);
  });
  
  test('if animals age is 24, should be 2', () => {
    expect(getHumanAge (24, 24))
      .toEqual([2, 2]);
  });
  
  test('if animals age is 27, should be 2', () => {
    expect(getHumanAge (27, 27))
      .toEqual([2, 2]);
  });
  
  test('if animals age is 28, should be 3 and 2', () => {
    expect(getHumanAge (28, 28))
      .toEqual([3, 2]);
  });
  
  test('if animals age is 100, should be 21 and 17', () => {
    expect(getHumanAge (100, 100))
      .toEqual([21, 17]);
  });
});