"use strict";
// OBJECTS | ARRAYS   | TUPLE   |  Enum  | ANY ---------------------------------------------
//objects > define object type within curly brackets
const person1 = {
    //define key and value pairs of objext
    name: "rachel",
    age: 30,
};
//console log person for all details and/or
// console log person.name keyvalue pair
console.log(person1.name);
//BEST PRACTICE--------------------------------------------------
const person = {
    //define key and value pairs of objext
    name: "rachel",
    age: 30,
};
//console log person for all details and/or
// console log person.name keyvalue pair
console.log(person.name);
//ARRAYS------String Array--------------------------------------------------
let hobbies = ["soccer", "boats", "coding"];
//ARRAYS------Number Array--------------------------------------------------
let myNum = [1, 2, 3];
//ARRAYS------Mixed Array--------------------------------------------------
let myMixedArray = ['apple', 1, 'orange', 2, 3, 'Banana'];
//ARRAYS------Mixed Array--------------------------------------------------
const personMixed = {
    name: "rachel",
    age: 30,
    hobbies: ["soccer", "boats", "coding"],
};
// the ANY type below means any value whether string or number
let favoriteActivities;
favoriteActivities = ["sports", 1];
console.log(personMixed.hobbies);
console.log(favoriteActivities);
//ARRAYS------FOR LOOP Array--------------------------------------------------
const personLoop = {
    name: "rachel",
    age: 30,
    hobbies: ["soccer", "boats", "coding"],
};
//for loop prining each hobbie on a new line
//AND in upperCase
for (const hobby of personLoop.hobbies) {
    console.log(hobby.toUpperCase());
}
//Tuple--------------------------------------------------------
const tuple = {
    name: "rachel",
    age: 30,
    hobbies: ["soccer", "boats", "coding"],
    //should always have two elements. First element is the numeral and secong is string
    role: [2, "oldName"],
};
tuple.role.push("newname"); // push will replace current value
// tuple.role[1] = 10; wont work because it will push 10 as the second item (which is a string under role)
console.log(tuple);
//Enum--------------------------------------------------------
//define global enum values, first one is 0, 1, 2, 3
//means you dont have to do const ADMIn = 1
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//you can assign from 1 rather than using 0, the rest will go + from there
// enum Role {ADMIN=1, READ_ONLY, AUTHOR};
const enum1 = {
    name: "rachel",
    age: 30,
    hobbies: ["soccer", "boats", "coding"],
    // Role 1, 2 you may forget what it means,
    // Human readable identifiers will help i.e Admin, "read-only user" etc
    // Defined as a global const above ^
    role: Role.AUTHOR,
};
if (enum1.role === Role.AUTHOR) {
    console.log("is Author");
}
//ANY--------------------------------------------------------
const any = {
    name: "rachel",
    age: 30,
    hobbies: ["soccer", "boats", "coding"],
};
let favoriteColor;
favoriteColor = ["red", 1];
console.log(favoriteColor);
