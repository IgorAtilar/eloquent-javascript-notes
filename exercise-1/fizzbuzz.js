// First try

for (let i = 1; i < 11; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  }

  if (i % 5 === 0) {
    console.log('Buzz');
  }

  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
}

// With internet example

for (let i = 1; i < 11; i++) {
  const fizzBuzz = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz');

  if (fizzBuzz) {
    console.log(fizzBuzz);
  }
}
