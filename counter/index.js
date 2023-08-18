
var counter = 0;

function increment() {
    counter++;
    document.getElementById("result").innerHTML = counter;
}

function decrement() {
    counter--;
    document.getElementById("result").innerHTML = counter;
}

function reset() {
    counter = 0;
    document.getElementById("result").innerHTML = counter;
}