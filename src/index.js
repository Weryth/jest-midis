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


module.exports = {
  validateNumber,
  square,
  fetchData,
  
};
