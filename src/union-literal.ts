//UNION TYPE | Literal Type -------------------------------------

//Union Type-------------------------------------------------------
//calculte result but more flexible regarding the input
//works with numbers and strings by using or  |
//Sometimes you will need runtime error checks when using union

function combine(input1: number | string, input2: number | string) {
  let result;
  //run time if else statement
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("max", "Rachel");
console.log(combinedNames);

//Literal Type-------------------------------------------------------
//Will force a conversions between types
//option 1-----------------------------------------------------------------

function literal(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  //run time if else statement
  if (typeof input1 === "number" && typeof input2 === "number") {
    //force the converstion to numebrs by + infront
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    // + converts to a number, alternative will be parseFloat(result)
    return +result;
  } else {
    // convert to string
    return result.toString();
  }
}
// 56
const combinedAges1 = literal(30, 26, "as-number");
console.log(combinedAges1);

//string concatinates to 3026
const combinedStringAges = literal("30", "26", "as-number");
console.log(combinedStringAges);

//maxRachel
const combinedNames1 = literal("max", "Rachel", "as-text");
console.log(combinedNames1);

//option 2---------------------------------

function literalTwo(
  input1: number | string,
  input2: number | string,
  resultConversion2: string
) {
  let result;
  //run time if else statement
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion2 === "as-number"
  ) {
    //force the converstion to numebrs by + infront before displaying value
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
// 56
const combinedAges2 = literalTwo(30, 26, "as-number");
console.log(combinedAges2);

//string concatinates to 3026
const combinedStringAges2 = literalTwo("30", "26", "as-number");
console.log(combinedStringAges2);

//maxRachel
const combinedNames2 = literalTwo("max", "Rachel", "as-text");
console.log(combinedNames2);

//option 3---------------------------------

function literalThreee(
    input1: number | string,
    input2: number | string,
    //use union type combined with literal type (2 or more possible values)
    resultConversion33: 'as-number' | 'as-text'
  ) {
    let result;
    //run time if else statement
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion33 === "as-number"
    ) {
      //force the converstion to numebrs by + infront before displaying value
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  // 56
  const combinedAges33 = literalThreee(30, 26, "as-number");
  console.log(combinedAges33);
  
  //string concatinates to 3026
  const combinedStringAges33 = literalThreee("30", "26", "as-number");
  console.log(combinedStringAges33);
  
  //maxRachel
  const combinedNames3 = literalThreee("max", "Rachel", "as-text");
  console.log(combinedNames3);
