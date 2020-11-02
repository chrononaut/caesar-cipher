const caesarCipher = require('../caesarCipher.js');

describe('caesarCipher', () => {

  it('should exist', () => {
    expect(caesarCipher).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof caesarCipher).toBe('function');
  });

  it('should only accept a nonempty input string', () => {
    expect(caesarCipher('', 3)).toMatch('Input is not a valid string.');
  });

  it('should only accept a nonzero integer key', () => {
    expect(caesarCipher('hello', 0.5)).toMatch('Key is not a nonzero integer.');
    expect(caesarCipher('hello', 0)).toMatch('Key is not a nonzero integer.');
  });

  it('should only accept an alphabetical letters as input', () => {
    expect(caesarCipher('1e17', 3)).toMatch(`${1} is not an accepted character.`);
    expect(caesarCipher('h3llo', 3)).toMatch(`${3} is not an accepted character.`);
  });

  it('should return an encrypted/decrypted string', () => {
    expect(caesarCipher('hello', 4)).toMatch('lipps');
    expect(caesarCipher('lipps', -4)).toMatch('hello');
  });
})