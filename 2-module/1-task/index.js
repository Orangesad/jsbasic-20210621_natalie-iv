function sumSalary(salaries) {
  const numbers = Object.values(salaries).filter(number => typeof (number) === 'number' && isFinite(number));
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
