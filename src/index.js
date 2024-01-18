function validateNumber(value) {
  if (value < 0 || value >= 100) {
    return false;
  }
  return true;
}

function square(value) {
  return Math.pow(value, 2);
}

module.exports = {
    validateNumber,
    square
};

