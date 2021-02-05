"use strict";
// ======================================================================
// type NEVER
// ======================================================================
// Throw error-----------------------------------------------------------
// THIS function never produced a return value which is why it is called
// 'never'. The throw error will essentially cancel the script and not
//produce anything more unless you implement catch to continue with the script
// function with an error mesage= string and a code = number
function generateError(message, code) {
    // inside function we throw an error object
    // message property which we store the  value of the message argument
    // error code property which stores the code argument
    throw { message: message, errorCode: code };
}
// call function > message and code number
generateError("An error has occured", 500);
// // infinite loop-----------------------------------------------------------
// function generateLoop(messString: string, code1: number): never {
//   while (true) { messString: messString, errorMsg: code1 };
// }
// generateLoop("An error has occured", 500);
