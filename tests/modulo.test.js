const mod = require('../util/modulo.js');

describe('mod', () => {
  
  it('should exist', () => {
    expect(mod).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof mod).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof mod(5, 2)).toBe('number');
  });

  it('should handle various cases including atypical operands', () => {
    expect(mod(-1, 1)).toBe(0);
    expect(mod(3, 7)).toBe(3);
    expect(mod(-3, 7)).toBe(4);
    expect(mod(-3, -7)).toBe(-3);
    expect(mod(3, -7)).toBe(-4);
    expect(mod(0, 1)).toBe(0);
    expect(() => mod(1, 0)).toThrow('Dividing by zero is undefined!');
  });
});