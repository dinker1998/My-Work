console.log("Destructring");
let myFavFru = ["Apple", "Cherry", "Watermenlon", "Orange"];
//let myFavFru1 = myFavFru[0];
//let myFavFru2 = myFavFru[1];
//let myFavFru3 = myFavFru[2];
let [myFavFru1, , , myFavFru2] = myFavFru;
console.log("myFavFru1", myFavFru1);
console.log("myFavFru2", myFavFru2);
//console.log("myFavFru3", myFavFru3);

let [favFru1, favFru2, ...rest] =myFavFru;
console.log(favFru1);
console.log(favFru2);
console.log(rest);

let myDetails ={
    fname: "Dinker",
    lname: "Halnure",
    dob: "22121998",
};
let {fname: FirstName, dob} = myDetails;
console.log("fname", FirstName );
//console.log("lname", lname);
console.log("dob", dob);

