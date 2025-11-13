import { calculationService } from './calculationService.js';

export const doSomethingWithCalculation = async (x, y) => {
  const result = await calculationService.calculate(x, y);
  return result * 2;
};