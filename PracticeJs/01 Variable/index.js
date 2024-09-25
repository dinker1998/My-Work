console.log("Variable Declaration")

//Let
//Let keyword can be updated and can't be redeclated.

let myName = "Dinker";
console.log("myName", myName);


myName = "Dinker Halnure";
console.log("myName", myName);

//Const
//Const keyword cannot be updated and redeclared

const myLastName = "Halnure";
console.log("myLastName", myLastName);


const myObject = {fname: "Dinker", lname:"Halnure"};
console.log(myObject);
myObject.fname = "Dinu";
console.log(myObject);


//Var
//var can be reassigned and redeclared
//Bad practice to use var

var b = "LWC";
console.log("b", b);
b = "LWC Practice";
console.log(b);

var b = "Bootcamp LWC Practice";
console.log("b",b);