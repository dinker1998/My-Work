

let storetext = [];
function actiontoadd() {
    const inputelement = document.getElementById("input_text");
    const get_text = inputelement.value.trim();

    console.log(storetext);
    if (!get_text) {
        
        console.log("There is Empty String");
        document.getElementById("error").innerHTML = "Enter someting to add";
    }
    else if (storetext.includes(get_text) ){
        document.getElementById("error").innerHTML ="This task is already added";
    }
    else{
        document.getElementById("error").innerHTML =""
        const el = document.createElement("li");
        el.textContent = get_text;
        const box = document.getElementById("updatevalue");
        box.appendChild(el);
        console.log(el);
        storetext.push(get_text);
        inputelement.value = "";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            // Remove the list item and text from the array
            box.removeChild(el);
            storetext = storetext.filter(text => text !== get_text);
        });

        // Append the delete button to the list item
        el.appendChild(deleteButton);
    }
}