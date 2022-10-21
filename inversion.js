const input = process.argv[2];
const numbers = input.split(","); 
console.table(numbers)

let min = 0;
let max = (numbers.length) -1;
while (min < max) {
    const candidate =numbers[min];
    numbers[min] = numbers[max];
    numbers[max] = candidate;
    min++
    max--
}
console.table(numbers)