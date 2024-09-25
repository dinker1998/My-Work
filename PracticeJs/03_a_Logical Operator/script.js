console.log("Logical Operators");

let myNum1 = 10;
let myNum2 = "20";
console.log(typeof myNum1 , typeof myNum2);
if(isNaN(myNum2)){
console.log("myNum2 is not a number thus conversion is not possibile");
}else{
    console.log(myNum1 + Number(myNum2));
}

let myNum3 = "30";
let myNum4 = 10;
console.log(typeof myNum3, typeof myNum4);
console.log(myNum3 + myNum4);
console.log(myNum3 - myNum4);
console.log(myNum3 * myNum4);
console.log(myNum3 / myNum4);


//Assignment Operator

let myNum5 = 50;
myNum5 = 60;

//Comparision Operator (>, >=, <=, !=, ==, ===)

let myNum6 = 10;
let myNum7 = 20;

console.log(myNum6 > myNum7);
console.log(myNum6 < myNum7);

//Logical Operator (&&,||,!)
console.log(true && false);
console.log(true && true);
console.log(myNum6 > 0 && myNum6 > 5);

let myString1 = "Dinker";
let myString2 = "halnure";
console.log("&&",myString1 && myString2);

console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(myNum6 > 0 && myNum6 > 5);
console.log("||",myString1 || myString2);

let isSal = false;
console.log("isSal", isSal);
isSal = !isSal;
console.log("isSal", isSal);

//Ternary Operator
let age = 25;
let output = (age < 18) ? "Too Young" : "Old Enough";
console.log(output);


// == only check for value 
// === check for value and type
let num10 = 3;
let num11 = 3;
console.log(typeof num10, typeof num11);
console.log(num10, num10);
console.log(num10 == num10);
console.log(num10 === num10);

console.log("dinker" == "Dinker");
console.log("dinker" === "Dinker");

//null vs undefined
let myString3 = null;
let myString4;
console.log(typeof myString3, typeof myString4);
console.log(myString3 == myString4);
console.log(myString3 === myString4);