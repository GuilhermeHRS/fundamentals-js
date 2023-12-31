function greetings(name){
    return `My name is ${name}`;
}

// Arrow function
const introduceArrow = name => `My name is ${name}`;
const sum = (x, y) => x + y;

console.log(sum(1,2));

// Arrow function with + instruction line

const sumLittleNumbers = (x, y) => {
    if (x > 10 || y > 10){
        return "only 1-9 numbers"
    } else {
        return x + y;
    }
}
