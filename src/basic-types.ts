//NUMBERS, STRING and BOOLS

// Numbers-------------------------------------------------------------
function number(n1: number, n2: number) {
  console.log(typeof number1);
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const resultN = number(number1, number2);
console.log(resultN);

//String--------------------------------------------------------------
function string(n1: string, n2: string) {
  console.log(typeof string1);
  return n1 + n2;
}

const string1 = "Hello";
const string2 = "World";

const resultS = string(string1, string2);
console.log(resultS);

//bool----------------------------------------------------------------
function bool(n1: boolean, n2: boolean) {
  console.log(typeof bool1);
  console.log(typeof bool2);
  return [n1, n2];
}

const bool1 = true;
const bool2 = false;

const resultB = bool(bool1, bool2);
console.log(resultB);

//number and string together-------------------------------------------
function numberString(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) {
    //seperate the number result value to the string otherwise
    // phrase + n1 + n2 will create the entire output as a string
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const numb1 = 5;
const numb2 = 2.8;
const printResult = true;
const resultPhrase = "result is: ";

numberString(numb1, numb2, printResult, resultPhrase);
