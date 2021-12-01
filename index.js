// Create a loop that goes through integers 1 - 100
for (let i = 1; i <= 100; ++i) {
  // Log "Fizz" if integer is a multiple of 3
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Fizz");
    // Log "Buzz" if integer is a multiple of 5
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
    // Log "Fizzbuzz" if integer is a multiple of 3 and 5
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizzbuzz");
    // Otherwise, log the integer
  } else {
    console.log(i);
  }
}