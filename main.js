'use strict'

//Declaring variables
let result, operator, firstNumber, secondNumber

//Assigning variables to each prompt input
firstNumber = parseInt(prompt(`Enter 1st number`)) 
operator = prompt('Enter operator')
secondNumber = parseInt(prompt(`Enter second number`)) 

//checking for the operation choosen by the user
if(operator == '+'){
    result = firstNumber + secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else if(operator == '-'){
    result = firstNumber - secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else if(operator == '*'){
    result = firstNumber * secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else if (operator == '/'){
    result = firstNumber / secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else{
    alert(`Come on, Invalid operation: ${firstNumber} ${operator} ${secondNumber}`)
}
//Log full result of calcution
console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)


