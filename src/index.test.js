const { validateNumber, square } = require("./index");
const { performance } = require("perf_hooks");

/*
describe("Валидация проходит корректно", () => {
  test.each([
    [5, true],
    [-5, false],
    [100, false],
  ])("для %i ожидается %i", (param, expected) => {
    expect(validateNumber(param)).toBe(expected);
  });

  test("Валидация значения", () => {
    let result = validateNumber(50);
    expect(result).toBe(true);
    expect(result).not.toBeUndefined();
  });
});

test("Квадрат рассчитывается корректно 1", () => {
  let param = 5;
  let squareResults = Math.pow(5, 2);
  expect(square(param)).toEqual(squareResults);
});

describe("Квадрат рассчитывается корректно 2", () => {
  test.each([
    [5, 25],
    [-5, 25],
    [100, 10000],
  ])("для %i ожидается %i", (param, expected) => {
    expect(square(param)).toEqual(expected);
  });
});

test("validateNumber должна выполняться быстро", () => {
  const start = performance.now();
  validateNumber(50);
  const end = performance.now();

  const executionTime = end - start;

  // Проверка, что время выполнения не превышает определенный лимит (например, 100 миллисекунд)
  expect(executionTime).toBeLessThan(1);
});

*/
describe('validateNumber', () => {
    test('должна возвращать true для чисел в диапазоне 0-100', () => {
      expect(validateNumber(50)).toBe(true);
      expect(validateNumber(0)).toBe(true);
      expect(validateNumber(100)).toBe(true);
    });
  
    test('должна возвращать false для чисел меньше 0', () => {
      expect(validateNumber(-1)).toBe(false);
    });
  
    test('должна возвращать false для чисел больше 100', () => {
      expect(validateNumber(101)).toBe(false);
    });
  });
