let currentNum = 0;


const add = (num1, num2) =>
{
    return num1+num2;
}

const subtract = (num1, num2) =>
{
    return num1-num2;
}

const multiply = (num1, num2) =>
{
    return num1*num2;
}

const divide = (num1, num2) =>
{
    return num1/num2;
}


const operate = (operator, num1, num2) =>
{
    switch(operator)
    {
        case "+":
            return sum(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "x":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            return null;
            break;
    }
}

let numButtons = document.querySelectorAll(".num");

numButtons.forEach((button) =>
{
    button.addEventListener('click', (e) =>
    {
        console.log(e.target);
    });
});





