// ----- DECLARE VARIABLES ----- //
let outputArray = [];
let answerArray = [];

// ---- ANSWER DISPLAY TEXT ---- //
const displayOutputArray = () => {
    //color green if operator used?
    document.getElementById("outputString").innerHTML = outputArray.join('');
}

// ------- INPUT COLLECT ------- //
const inputCollect = (clicked_id) => {
    if (answerArray.length > 0) {
        clearAll();
        outputArray.push(clicked_id);
    } else {
        outputArray.push(clicked_id);
    }
    displayOutputArray();
}

// -------- DECIMAL CHECK ------- //
const outputArrayDecimal = (clicked_id) => {
    let lastElement = outputArray[outputArray.length - 1];
    if (answerArray.length > 0) {
        clearAll();
        outputArray.push(clicked_id);
    } else {
        if (lastElement != ".") {
            outputArray.push(clicked_id);
        }
    }
    displayOutputArray();
}

// ------- OPERATOR CHECK ------ //
const operatorControl = (clicked_id) => {
    let lastElement = outputArray[outputArray.length - 1];
    if (lastElement != "+" && lastElement != "-" && lastElement != "*" && lastElement != "/") {
        outputArray.push(clicked_id);
        displayOutputArray();
    }
}

// -------- EQUALS BUTTON ------ //
const answerEquals = () => {
    answerArray.length = 0;
    if (outputArray.length > 0) {
        answerArray.push(eval(outputArray.join('')));
        outputArray.length = 0;
        outputArray.push(answerArray);
        displayOutputArray();
        console.log(answerArray.length);
    }
}

// --------  CLEAR BUTTON ------ //
const clearAll = () => {
    outputArray = [];
    answerArray = [];
    displayOutputArray();
}