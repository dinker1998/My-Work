console.log("string Interpolation")
let myString1 = "my name is";
let myString2 = "Dinker";
let myString3 = "I Stay in";
let myString4 = "Noida";
let calculateAge = 2023 - 1985;
let myString5 = "age is";

//let myFinalString = "my name is" +myString2 + ' ' + myString3 
let myFinalString = `my name is ${myString2}. I sta'y in ${myString4} and my age " is ${2023 - 1985}`;
console.log("myFinalString", myFinalString);d