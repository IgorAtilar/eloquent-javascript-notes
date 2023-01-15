// First try
for (let i = 0; i < 7; i++) {
  console.log('#'.repeat(i));
}

// Trying with a functional approach

Array.from(Array(7).keys()).forEach((number) =>
  console.log('#'.repeat(number))
);
