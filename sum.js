const input = process.argv[2]
const array = input.split(",") 

const numbers = []
let sum = 0

for(let i = 0; i<array.length; i++ ){
    const candidate = array[i]; 
    const number = parseInt(candidate, 10);
    sum +=number
}
 console.log("Sum is equal to " + sum);