const input = process.argv[2]//node.js not JavaScript
console.log(input)

const array = input.split(",") //source
console.log(array)
//console.table(array)

const numbers = []// destination

for(let i = 0; i<array.length; i++ ){ // loop code block
    const candidate = array[i]; //type string
    //objectif: convert candidate into a number
    const number = parseInt(candidate, 10);
    numbers.push(number);
}
console.log(numbers);
