alert('Welcome to my calculator');

function getInputs() {
    const firstNumber = prompt('Input your first number? ');
    const secondNumber = prompt('Input your second number? ');
    const operation = prompt('Input the operation you want ot perform.\n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division. \n**** Hint: Enter 1, 2, 3 or 4 *****');


    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operation);

    switch (operation) {
        case '1':
            alert(`Your result is ${Number(firstNumber) + Number(secondNumber)}`);
            break;
        case '2':
            alert(`Your result is ${Number(firstNumber) - Number(secondNumber)}`);
            break;
        case '3':
            alert(`Your result is ${Number(firstNumber) * Number(secondNumber)}`);
            break;
        case '4':
            alert(`Your result is ${Number(firstNumber) / Number(secondNumber)}`);
            break;
        default:
            alert('Invalid operation entered! Try again');
            getInputs();
    }
}

getInputs();