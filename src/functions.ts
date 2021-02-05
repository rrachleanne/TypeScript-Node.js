// --------------------------------------------------------------------------------
// Function Type
//1. Function return types and void
//2. Function Types
// 3. Fucntion Types and callbacks
// ---------------------------------------------------------------------------------

//Named function

function add3(x: number, y: number): number {
  return x + y;
}


//Anonymous function

let myAdd = function (x: number, y: number): number {
  return x + y;
};




// Function return Types and Void option1-----------------------------------------------------------------------------------
//cannot assign types to parameters
//Named function
function add(n1: number, n2: number) {
  return n1 + n2;
}

//print Result method > special return type called 'void'
// used when fucntion does not return a value
// number argument
function printResult1(num: number) {
  console.log("function return type: " + num);
  // concat to a string and number output
}

//call print result and pass two arguments
printResult1(add(5, 12));

// Function return Types and Void o option2 -----------------------------------------------------------------------------------------
// Function types are types that describe a function
function addition(n1: number, n2: number) {
  return n1 + n2;
}

let combineValues: Function;
combineValues = addition;
console.log("function return type:" + combineValues(8, 8));

// FUNCTION TYPE -----------------------------------------------------------------------------------------
// Function types are types that describe a function
function example(n1: number, n2: number) {
  return n1 + n2;
}

//specify the return type (number, string etc) after the fat arrow on what you want to store in here
//just match parameter types not names > should accept any function that can take in
//   two paramaters (regardless of the name) > each parameter is a number and where the function overall
// returns a number
let combineValues1: (a: number, b: number) => number;

combineValues1 = example;
console.log("function type:" + combineValues1(2, 8));

// FUNCTION Callbacks -----------------------------------------------------------------------------------------

function callback(n1: number, n2: number) {
  return n1 + n2;
}
//callback (callback should be a function so you need fat arrow). Passing a num as number type
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log('callback:' + result)
});
//                         Annoymous function here
