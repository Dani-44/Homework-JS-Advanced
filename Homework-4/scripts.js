function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "number is even"
    }

    return "number is odd" 
}

console.log("Calling function with number 44. This", evenOrOdd(44));
console.log("Calling function with number 25. This", evenOrOdd(25));

console.log("----------------------")

function positiveOrNegative(number) {
    if (number > 0) {
        return "number is positive"
    }

    return "number is negative"
}

console.log("Calling function with number 5. This", positiveOrNegative(5));
console.log("Calling function with number -5. This", positiveOrNegative(-5));

console.log("----------------------")

function allFunctions(func1, func2, number){
    return func1(number) + " and " + func2(number)
}

let result = allFunctions(evenOrOdd, positiveOrNegative, -25);
console.log("Calling function with number -25. This number is:", result);