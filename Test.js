const name = 'john';
const age = 24;
//Concatenation 
console.log("My name is " + name + " and I am " + age);
//Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// String, Number, Boolean, null, undefined
const s = "Hello World";

console.log(s.length); //length property
console.log(s.toLocaleUpperCase()); //Converts to uppercase
console.log(s.toLocaleLowerCase);   //Converts to lowercase
console.log(s.substring(0, 5)//takes 2 indexs start at 0 and end with 5
    .toUpperCase());    //and we can chain these.

const l = "HTML, CSS, JavaScript";
console.log(l.split(', '));   //Splits each letter in the string

//Arrays - Variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears', 10, true];

console.log(fruits); // Gets all the variables in the array
console.log(fruits[1]);  // gets the 2nd position in the variable

fruits[3] = 'grapes'; //adds the variable in to the 4th positon removing exisisting variable
console.log(fruits);
fruits.push('mangoes'); //adds the variable to last position in the array
console.log(fruits);
fruits.unshift('watermelon');  //adds the variable to start position in the array
console.log(fruits);
fruits.pop();  //removes the variable at last position in the array
console.log(fruits);
console.log(Array.isArray('hello')); // checks something is in array or not by 'true' or 'false'
console.log(fruits.indexOf('oranges')); //shows the index of variable

//Object Literals

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}

console.log(person);
console.log(person.hobbies[1]); //accessing variable from array in object
console.log(person.address.city)  //accessing variable from object that is inside another object


const { firstName, lastName, address: { city } } = person;  //pulling variable from object
console.log(firstName, city);

person.email = 'johm@gmail.com';  //we can directy add property to object
console.log(person);

//Arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'Cook breakfast',
        iscompleted: true
    },
    {
        id: 3,
        text: 'Go to friends',
        iscompleted: false
    }
];

console.log(todos[1].text); //accessing variable in arrays of object

const todojson = JSON.stringify(todos); //used convert the something in to JSON format
console.log(todos);  //if we want to send it to different system or server

//for loop
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].id);
}

//For of loop
for (let todo of todos) {
    console.log(todo.text);
}

//High order Array methods "Suggested to use this type"
//forEach, map, filter
//High order array methods they take in as a parameter a function

//forEach
todos.forEach(function (todo) { //it take multiple parameters
    console.log(todo.text);
});

//map
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos.filter(function (todo) {
    return todo.iscompleted === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoCompleted);

// functions 
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(5, 4);

function addNo(num1 = 1, num2 = 2) { // we pass default parameters
    console.log(num1 + num2);
}
addNo(); // if we give here parameters it will overwrite it

//better method to do

function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(5, 4));

//Arrow functions are most efficient and clean

const AddNum = (num1 = 1, num2 = 2) => {
    console.log(num1 + num2);
}
AddNum(5,5)


//object orientrd programming

