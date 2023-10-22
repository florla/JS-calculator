// clearDisplay function gets the display id and sets its value to an empty string 
function clearDisplay() {
    document.getElementById('display').value = '';
}

// toDisplay function puts the value of whatever button is clicked into the display and continues to add depending on what is clicked
// (value) represents the number/operator being added 
function toDisplay(value) {
    document.getElementById('display').value += value;
}

//
function calculate() {
    //try and catch block is used for error handling, it attempts code and catches any errors during execution
    try {
        //retrieves cuurent value of display and stores it in expression variable
        const expression = document.getElementById('display').value;
        //checks if an expression containes /0, if it does it throws an error since its not allowed
        if (expression.includes('/0')) {
            throw new Error();
        }
        //if there is no /0 the code continues to use eval to calculate the result of the expression- the result is then stored in result variable
        const result = eval(expression);
        //displays result into display element
        document.getElementById('display').value = result;
        //if an error occurs during try block (above) it goes to catch and displays the value error
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// document listens for the keyup event, when the enter key is pressed the calculate function is called
document.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        calculate();
    }
});