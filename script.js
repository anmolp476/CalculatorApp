//Model
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

//Function for the clear button
function clearDisplay()
{
    console.log("clear");
    const displayClear = document.querySelector(".output");
    displayClear.value = "";
}

//View
const display = document.querySelector(".output")

const numButtons = document.querySelectorAll(".num");

numButtons.forEach((button) =>
{
    button.addEventListener('click', (e) =>
    {
        const currentButton = e.target;
        display.value += currentButton.innerText;
    });
});

//Controllers
const opButtons = document.querySelectorAll(".operation")

opButtons.forEach((button) =>
{
    button.addEventListener('click', (e) =>
    {
        const currentButton = e.target;
        console.log(currentButton);
    });
});




