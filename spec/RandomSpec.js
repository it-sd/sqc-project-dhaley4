const assert = require('node:assert/strict');
const { randomNumber } = require('../server.js');

describe('testing randomness', function() {
  it('should return a value > 0', function() {
    // write your test code here
    for (i = 0; i < 10000; i++) {
      const random = randomNumber()
      expect(random).toBeGreaterThanOrEqual(0)
    }
  })

  it('should return a value less than 4096', function() {

    for (i = 0; i < 10000; i++) {
      const random = randomNumber()
      expect(random).toBeLessThan(4096)
    }
  })
});