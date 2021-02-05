//Aliases Type-------------------------------------------------------

// When working with union types, it can become cumbersome to enter in the unions.
// You can create a new type that stores the union type. Type Alises does this.

// type keyword is not built in JS but build in TS. After Type >
// any name can go here that is not built into JS i.e Date cannot go in there

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine0(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    //run time if else statement
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      //force the converstion to numebrs by + infront before displaying value
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  // 56
  const combinedAges3 = combine0(35, 29, "as-number");
  console.log(combinedAges3);
  
  //string concatinates to 3026
  const combinedStringAges3 = combine0("40", "26", "as-number");
  console.log(combinedStringAges3);