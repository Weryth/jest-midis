const { validateNumber, square } = require("./index");
const { performance } = require('perf_hooks');


test("Валидация значения", () => {
  expect(validateNumber(50)).toBe(true);
});

describe("Валидация проходит корректно", () => {
    test.each([
      [5, true],
      [-5, false],
      [100, false],
    ])("для %i ожидается %i", (param, expected) => {
      expect(validateNumber(param)).toBe(expected);
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

test('validateNumber должна выполняться быстро', () => {
    const start = performance.now();
    validateNumber(50);
    const end = performance.now();
  
    const executionTime = end - start;
  
    // Проверка, что время выполнения не превышает определенный лимит (например, 100 миллисекунд)
    expect(executionTime).toBeLessThan(1);
  });
