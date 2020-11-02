/**
 * Implementation of modulo operator due to Javascript lacking a true
 * modulo operator. The "%" operator is actually a "signed" remainder operator.
 * Using this function returns the expected result of a modulo operation.
 *
 * @param {number} dividend - Number being divided
 * @param {number} divisor - Number to divide by 
 * @return {number} Remainder of dividend / divisor
 *
 * @example
 *
 *     modulo(7, 3) // returns 1
 */

function modulo(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Dividing by zero is undefined!');
  }

  return dividend - Math.floor(dividend / divisor) * divisor;
}

module.exports = modulo;