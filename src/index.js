function validateNumber(value) {
  if (value < 0 || value > 100) {
    return false;
  }
  return true;
}

function square(value) {
  return Math.pow(value, 2);
}

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("данные получены");
    }, 1000);
  });
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль");
  }
  return a / b;
}

async function fetchUserData(userId) {
  // Имитация запроса к API для получения данных пользователя
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe", age: 30 });
    }, 1000);
  });
}

function processUserData(userData) {
  // Простая обработка данных пользователя
  return {
    ...userData,
    isAdult: userData.age >= 18,
  };
}

module.exports = {
  validateNumber,
  square,
  fetchData,
  divide,
  fetchUserData,
  processUserData,
};
