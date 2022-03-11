/* selector */
const previousOperandElement = document.querySelector('.previous_operand');
const currentOperandElement = document.querySelector('.current_operand');
const acButton = document.querySelector('#ac_allClear');
const del = document.querySelector('#del');
const equalButtons = document.querySelector('#equals');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.oparator')



let previousOperand = ""; /* previousOperandElement */
let current_operand = ""; /*currentOperandElement  */
let operation = ""; /* operatorButtons */




/************* delete button *********** **/
del.addEventListener('click', function () {
    current_operand = current_operand.slice(0, -1);
    updateDisplay();
})


/************* all clear button *********** **/
acButton.addEventListener('click', function () {
    previousOperand = "";
    current_operand = "";
    operation = "";
    updateDisplay();

})

/*************format output*********** **/
/* bujte hobe */

function formatOutput(num) {
    const result = Number(num).toLocaleString('en');
    if (result !== "0") {
        return result;
    } else {
        return "";
    }
}


/*************update display*********** **/

function updateDisplay() {
    currentOperandElement.innerHTML = formatOutput(current_operand);
    previousOperandElement.innerHTML = `${formatOutput(previousOperand) } ${operation} `;
}

function appendNumber(number) {
    current_operand += number;

}

function choseOperator(operator) {
    /* bujte hobe */
    if (previousOperand) {
        previousOperand = calculation()
    } else {
        previousOperand = current_operand;

    }
    operation = operator;
    current_operand = "";

}

function calculation() {
    switch (operation) {
        case '÷':
            return Number(previousOperand) / Number(current_operand);
            break;

        case '*':
            return Number(previousOperand) * Number(current_operand);
            break;
        case '+':
            return Number(previousOperand) + Number(current_operand);
            break;
        case '-':
            return Number(previousOperand) - Number(current_operand);

    }
}
/************* equal buttons*********** **/
equalButtons.addEventListener('click', function () {
    if (!previousOperand) {
        return;
    }
    if (current_operand) {
        current_operand = calculation();
    } else {
        current_operand = previousOperand;
    }

    previousOperand = '';
    operation = '';
    updateDisplay();
})








/*************number buttons*********** **/

numberButtons.forEach((btn => {
    btn.addEventListener('click', function () {
        if (btn.textContent === '.' && current_operand.includes('.')) return;
        appendNumber(btn.textContent);
        updateDisplay()
    })
}))

/*************operator buttons*********** **/

operatorButtons.forEach((btn => {
    btn.addEventListener('click', function () {
        if (!current_operand) return; /* bujte hobe  */
        choseOperator(btn.textContent);
        updateDisplay()
    })
}))