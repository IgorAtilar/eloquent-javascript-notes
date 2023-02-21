function isEven(number) {
  const isPositiveNumber = number > 0;

  const formattedNumber = isPositiveNumber ? number : -number;

  if (formattedNumber === 0) {
    return true;
  }

  if (formattedNumber === 1) {
    return false;
  }

  return isEven(formattedNumber - 2);
}
