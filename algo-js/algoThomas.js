const input = process.argv[2];
const numbers = input.split(","); 
let numberRepeted = 0;
let combo = false;

for (let i = 0; i < 5; i++) {
    let tmp = 0;
    for (let j = 0;j < 5;j++) {
        if  (numbers[i] == numbers[j] && (numbers[j] == numbers[j-1] && numbers[j] == numbers[j+1])){
            tmp++
            combo = true
        }
        else if(numbers[i]==numbers[j]){
            tmp++
        }
        if(tmp >=3){
            numberRepeted = numbers[i]
        }
        
    }; 
}

if(numberRepeted !=0 && combo){
    console.log(`Le nombre ${numberRepeted} apparait 3 fois de suite`)
} else if(numberRepeted !=0){
    console.log(`Le nombre ${numberRepeted} apparait 3 fois`)
}else{
    console.log("Acune des nombres n'apparait 3 fois")
}