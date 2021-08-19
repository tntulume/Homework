
const calculatorDisplay = document.getElementById('input');
const output = document.getElementById('output');

const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const undoBtn = document.getElementById('undo');
const calswitchBtn = document.getElementById('calswitch');




// DECLARE LIST OF OPERATORS
let listOperators = ['-', '+', '*', '/'];

let firstValue = 0;
let secondValue = 0;
let op = '';
let removedCharacters =[];
let is_cal_on = false;



calswitchBtn.addEventListener('click', () => switchCal());

function switchCal(){
    if(is_cal_on){
        console.log('switching cal off')
        is_cal_on = false
        output.textContent = '';
        calculatorDisplay.textContent = '';
        calswitchBtn.textContent = 'ON'
    }
    else{
        console.log('switching cal on')
        is_cal_on = true
        output.textContent = '0';
        calculatorDisplay.textContent = '0';
        calswitchBtn.textContent = 'OFF'
    }
   
}

// list all buttons
console.log(inputBtns);

// to show the clicked number on the calculator screen
function sendNumberValue(number){
    if(is_cal_on){
        //calculatorDisplay.textContent = number 
        // replaces what is already being displayed
        console.log(number);
        const displayValue = calculatorDisplay.textContent;

        //if current value is '0' replace, else just add multiple number together to forma multi-digit eg 135
        calculatorDisplay.textContent = (displayValue === '0') ? number: displayValue + number;
    }
}
function splitValues(){
    let equation = calculatorDisplay.textContent;
    // create new array
    var equationBreakdown = new Array();
    //LOOP THROUGHT THE LIST OF OPERATORS
    listOperators.forEach((operator) => {
        //check if the operator exists in the equation string
        if(equation.includes(operator)){
            equationBreakdown = equation.split(operator);
            equationBreakdown.push(operator);
        }

    });

//    console.log(splitValues());

    return equationBreakdown;
}

function handleSplitValues(splitValue){
    if(is_cal_on){
        if(splitValue.length == 3 & splitValue[1] != ""){
            //ASSIGN SPLIT VALUES
            firstValue = splitValue[0];
            secondValue = splitValue[1];
            op = splitValue[2];

            console.log(splitValue);
            console.log('First Value ', firstValue);
            console.log('Second Value ', secondValue);
            console.log('Operator ', op);
            
            performOperation(firstValue, secondValue, op)
        }
        else{
            alert('Equation is not complete');
        }
    }
}

function performOperation(firstNumber, secondNumber, operator){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let answer;
    switch (operator){
        case operator = '+':
            answer = firstNumber + secondNumber;
            break;
        case operator = '-':
        answer = firstNumber - secondNumber;
        break;
        case operator = '*':
            answer = firstNumber * secondNumber;
            break;
        case operator = '/':
            answer = firstNumber / secondNumber;
            break;
    }
    console.log(answer);
    output.textContent = answer;
}


//add event listner to buttons
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0){
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }
    else if(inputBtn.classList.contains('equal')){
        inputBtn.addEventListener('click', () => handleSplitValues(splitValues()));
    }
    else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }
    else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal());
    }
});
// function addDecimal(){
//     //if no decimal, add one. If there's one already, don't add.
//     if (!calculatorDisplay.textContent.includes('.')) {
//         calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
//     }else{
//         alert('Math number can not have more than one point')
//     }
// }
function checkDecimal(){
    let currentEquation = calculatorDisplay.textContent;

    var currentEquationBreakdown = new Array();
    // LOOP THROUGH THE LIST OF OPERATORS

    listOperators.forEach((operator) => {
        if(currentEquation.includes(operator)){
            currentEquationBreakdown = currentEquation.split(operator);
        }
    });

    return currentEquationBreakdown;
}

function addDecimal(){
    if(is_cal_on){
        let splitEquation = checkDecimal();
        // console.log(splitEquation);
        if (!calculatorDisplay.textContent.includes('.')) {
            calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
        }
        else if(splitEquation.length > 1 ){
            if(!splitEquation[1].includes('.')){
                calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
            }
        }
    }
}
// reset calculator display function
function resetAll(){
    if(is_cal_on){
        calculatorDisplay.textContent ='0';
        output.textContent = '0';
    }
}
// reset calculator display arrow function  
//let reset = () => calculatorDisplay.textContent ='0';



// call clear function using clear button event listener
clearBtn.addEventListener('click', () => resetAll()); 

function deleteLastInput(){
    if(is_cal_on){
        let currentEquation = calculatorDisplay.textContent;
        //SPLIT EACH CHARACTER AS A SEPARATE ARRAY ELEMENT
        let currentEquationCharacters = currentEquation.split('');
        if(currentEquationCharacters.length > 0){
            let removedCharacter = currentEquationCharacters.pop();
            removedCharacters.push(removedCharacter);
        }
        // console.log ('current array of equation characters': 'currentEquationCharacters')
        //console.log (removed characters: 'removedCharacters')
        var newEquation = '';
        currentEquationCharacters.forEach((currentEquationCharacter) => {
            newEquation += currentEquationCharacter;
        });

        calculatorDisplay.textContent = newEquation;
        console.log(newEquation);
    }
}

deleteBtn.addEventListener('click', () => deleteLastInput());

undoBtn.addEventListener('click', () => undo());

function undo(){
    if(is_cal_on){
        if(removedCharacters.length > 0){
            let lastRemovedCharacterPosition = (removedCharacters.length - 1);
            let lastremovedCharacter = removedCharacters[lastRemovedCharacterPosition];    
            calculatorDisplay.textContent = `${calculatorDisplay.textContent}` + lastremovedCharacter;
            removedCharacters.pop();
        } else {
            alert('All values restored')
        }  
    }
}

var text = [];
  var i;
  var t;
  for (i = 0; i < 9; i++) {
    t = text += i
    console.log(i);
    // text.push(i);
    
  }
  
document.getElementById("para").innerHTML=t;
console.log(text);
console.log(i);





var text = [];
var i = 0;
do {
//   text += i;
text.push(i);
 
  i++;
}
while (i < 5);
console.log(text)


i = 8;
var set = []

while(i < 16){
    console.log(i)
    set.push(i);
    i++
}

console.log(set);


var lower = document.getElementById('lowerBtn');
var lower1 = document.getElementById('lowerP');
lower.addEventListener('click', () => lowerValue());

var alph = ['Egg', 'Banana', 'Potatoes']

function lowerValue(){
    lower.value = alph[2];
    console.log(lower.value)
    let lv = lower.value
    lower1.textContent = lv;
}

const numbers = [45, 4, 9, 16, 25];
let txt = [];
numbers.forEach((x) =>{
// function myFunction(value, index, array) 
console.log(x)
txt.push(x); 
})
console.log(txt);

const numbers1 = [1, 2, 3, 4, 5, 6];
let txt2 = [];
numbers1.forEach(myFunction1);

function myFunction1(value, index, array) {
    // txt2.push(value); 
    console.log(txt2 += value);
    if(value == 4){
        
        document.write('Hello')
        console.log('Hello')
    }
    else if(value == 2){

        lower1.textContent = 'Please enter'
    }
    else{
        document.write('Welcome')
        console.log('Welcome')
    }
}

console.log(txt2)
function  addMe(a, b, c){
    sum=a+b+c;
    console.log(sum)
    return sum
}
console.log(addMe(4, 16, 8));

let set1 = [100, 200, 300, 400];
let set2 = []

set1.forEach((num) =>{

console.log(num)
let mult = num / 4;
set2.push(mult)

})
console.log(set2)

function copyFunction(){
    confirm("Action restricted!")
}