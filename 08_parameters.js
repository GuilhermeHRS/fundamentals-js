// paramaters of functions

function sum(x, y){
    return x + y;
}

function multiplica(x, y){
    return x * y;
}

function printText(text){
    console.log(text);
}

printText(multiplica(sum(5,5), sum(5,5)));

// printText(sum(10, 5));


// parameteres order

// function personalData(name, age){
//     return `My name is ${name} and I'm ${age} years old`;
// }

// printText(personalData("Guilherme", 22));