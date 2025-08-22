// empty array to store caluclations
let history = []

//to add and store a new calculation to the array
function addCalc(operator, operand, result) {
    let newCalc = {
        operator: operator,
        operands: operand,
        result: result
    }
    history.push(newCalc);
}

function add(a, b) {
    let result = a + b;
    addCalc('add', [a, b], result);
    return result;
}

function subtract(a, b) {
    let result = a - b;
    addCalc('subtract', [a, b], result);
    return result;
}

function multiply(a, b) {
    let result = a * b;
    addCalc('multiply', [a, b], result);
    return result;
}

function divide(a, b) {
    //need to write a loop that will run through these options until b !== 0
    if (b === 0) {
        console.log("Error: cannot divide by 0.");
    } else {
        let result = a / b;
        addCalc('divide', [a, b], result);
        return result;
    }
}

function displayHistory() {
    if (history.length === 0) {
        console.log("There are is no calculation history.");
    } else {
        console.log("Calculation history: ");
        for (let i = 0; i < history.length; i++) {
            console.log(history[i]);
        }
    }
}

// console.log(divide(10, 0));
console.log(divide(10, 1));
console.log(divide(10, 2));

displayHistory();

