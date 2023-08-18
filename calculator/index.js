let input = document.getElementById('txt');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    throw new Error('Invalid expression');
                }
                input.value = string;
            } catch (error) {
                input.value = 'Error: ' + error.message;
            }
        }
        else if (e.target.innerHTML == 'C') {
            string = '';
            input.value = string;
        }
        else if (e.target.innerHTML == 'DL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
