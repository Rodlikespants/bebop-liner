// componentUsingService.test.js
import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import { doSomethingWithCalculation } from './componentUsingService.js';
import { calculationService } from '../calculationService.js'; // Import the original service

describe('doSomethingWithCalculation', () => {
  it('should use the mocked calculation service', async () => {
    // Mock the 'calculate' method of calculationService
    const mockImplementation = (a, b) => Promise.resolve(10); // Always return 10
    mock.method(calculationService, 'calculate', mockImplementation);

    const result = await doSomethingWithCalculation(5, 3); // The original arguments won't matter to the mock
    assert.equal(result, 20); // (10 from mock * 2)

    // Verify the mock was called
    assert.equal(calculationService.calculate.mock.callCount(), 1);
    assert.deepStrictEqual(calculationService.calculate.mock.calls[0].arguments, [5, 3]);
  });
});