console.log("Objects");

let myDetails = {
    "fname" : "Dinker",
    "lname" : "Halnure",
    "age" : 25,
    "skills" : ['Admin', "Apex"]
};

console.log("myDetails", myDetails);
console.log("typeof myDetails",typeof myDetails);

//Json.stringfy : object into string

let jsonString = JSON.stringify(myDetails);
console.log("jsonString",jsonString);
console.log("typeof jsonString",typeof jsonString);

//Json.parse : string into object

let jsonObject = JSON.parse(jsonString);
console.log("jsonObject",jsonObject);
console.log("typeof jsonObject",typeof jsonObject);

//Modify object 1) "." 2) []
myDetails.dob = '22/12/1998';
console.log("myDetails", myDetails);

myDetails.age = 2023 - 1988;
console.log("myDetails", myDetails);

//[] --> whenever we have to populate property dynamically
myCountry = "Country"; 
myDetails[myCountry] = "India";
console.log("myDetails", myDetails);

myDetails["City Name"] = "Pune";
console.log("myDetails", myDetails);

//Access the value from object , "." , []
let myCountrya = myDetails.Country;
console.log("myCountry", myCountrya);

let myCity = myDetails["City Name"];
console.log("My City", myCity);

