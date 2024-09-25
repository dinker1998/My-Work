console.log("Spread Operator");
let numberOne =[1,2,3];
let numberTwo =[4,5,6];

//concatination of array
let combinearray = [...numberOne,...numberTwo];
console.log("numberOne", numberOne);
console.log("numberOTwo", numberTwo);
console.log("combinearray", combinearray);

//Expand the string
let myName = "My Name Is Dinker";
console.log(myName);
console.log(...myName);

//Add elements in Array
numberOne = [10, 11, 12, ...numberOne, 21, 22, 23 ];
console.log("numberOne", numberOne);

//Adding the object
let myObj1 = {fname : "Dinker", skills : ["JS", "LWC", "Apex"]};
let myObj2 = {lanme : "Halnure", country : "India"};
let finalObject = {...myObj1, ...myObj2};
console.log("finalObject", finalObject);

//Copy an Array and Object
let myFavFru = ["Apple", "Grapes", "Watermelon"];
let myFavFruCopy = [...myFavFru]; //Shallow Copy
console.log("myFavFru", myFavFru);
console.log("myFavFruCopy", myFavFruCopy);
myFavFruCopy.push("cherry");
console.log("myFavFru", myFavFru); //Deep Copy

let myDetails = {fname: "Dinker", lname: "Halnure"}
let myDetailsCopy =myDetails;
myDetailsCopy.age = 45;
console.log("myDetailsCopy", myDetailsCopy);