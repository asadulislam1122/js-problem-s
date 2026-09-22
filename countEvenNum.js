// example 1

const numbers = [10, 15, 20, 25, 30, 35, 40];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
// console.log(numbers.length);

// example 2

const numbers2 = [10, 15, 20, 25, 30, 35, 40];

let count = 0;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    count++;
  }
}

// console.log(count);

const numbers3 = [10, 15, 20, 25, 30, 35, 40];

const evenCount = numbers3.filter((num) => num % 2 === 0).length;

console.log(evenCount);
