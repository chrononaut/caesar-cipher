const mod = require('./util/modulo.js');

/**
 * This is a basic implementation of a Caesar cipher which takes an input
 * string, shifts the position of each character in the string by "key" number
 * of positions and returns the encrypted string. Supply the encrypted string
 * and complementary key to reverse the operation and decrypt the message.
 *
 * @param {string} input - String to be encrypted -> [a-z, A-Z] characters
 * @param {number} key - Encryption "key" -> nonzero integer
 * @return {number} Encrypted or decrypted message
 *
 * @example
 * 
 *  caesarCipher('hello', 4) // returns 'lipps'
 *  caesarCipher('lipps', -4) // returns 'hello'
 */

function caesarCipher(input, key) {
  // Check if "input" is a nonempty string
  if (typeof input !== 'string' || input.length === 0) {
    return 'Input is not a valid string.';
  }
  // Check if "key" is a nonzero integer
  if (!Number.isInteger(key) || key === 0) {
    return 'Key is not a nonzero integer.';
  }
  const length = input.length;
  let charCode, newCode, result = '', i = 0;

  for (; i < length; i++) {
    charCode = input.charCodeAt(i);

    switch (true) {
      case (charCode >= 65 && charCode <= 90): // A-Z letters
        newCode = mod(charCode - 65 + key, 26) + 65;
        break;
      case (charCode >= 97 && charCode <= 122): // a-z letters
        newCode = mod(charCode - 97 + key, 26) + 97;
        break;
      default:
        return `${input[i]} is not an accepted character.`
    }
    result += String.fromCharCode(newCode);
  }

  return result;
}

module.exports = caesarCipher;