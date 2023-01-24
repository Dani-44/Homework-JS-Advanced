// Task 1
console.log("==========Task 1==========");

let userInput = prompt("Please enter ONLY number");

function sumTask1(num) {
    if (Number.isNaN(num)){
        return "Invalid input, please enter valid number!";
    }
    if(num === 0){
        return 0;
    }
    return num + sumTask1(num - 1)
}
console.log(sumTask1(Number(userInput)));

// Task 2
console.log("==========Task 2==========");

let someNum = 567391;
let digits = someNum.toString().split('');
let realDigits = digits.map(Number)
console.log("Given number is", 567391)
console.log(realDigits);

// Task 3
console.log("==========Task 3==========");

let numArr = [4, -9, -98, -1, 444, 3, -555];

for (let i = 0; i <= numArr.length; i++) {
    if (numArr[i] < 0) {
        numArr[i] = numArr[i] * -1;
    }
}
console.log(numArr)

// Task 4
console.log("==========Task 4==========");

let givenArr = [12, 45, 88, 1, 567, 3, 91];
let newArr = [];

for (let num of givenArr){
    if(num % 2 === 1){
        newArr.push(num);
    }
}
console.log(newArr)

// Task 5
console.log("==========Task 5==========");

let testArr = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
let newTestArr = testArr.filter(Number);
// Tuka imam edno prasanje, zosto i TRUE mi go dava vo console.log?
// I kako bi bilo reshenieto da ne go dava true

console.log(newTestArr)