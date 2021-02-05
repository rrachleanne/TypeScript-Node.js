"use strict";
//Aliases Type-------------------------------------------------------
function combine0(input1, input2, resultConversion) {
    let result;
    //run time if else statement
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        //force the converstion to numebrs by + infront before displaying value
        result = +input1 + +input2;
    }
    else {
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
