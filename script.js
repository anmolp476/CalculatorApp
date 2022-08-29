let result = 0;
let firstNum = 0;
let secondNum = 0;

function number(event)
{
    const output = document.getElementById("output");
    const button = event.target;
    output.value = button.innerHTML;
    firstNum = +button.innerHTML;
    //console.log(button.id);
}

const add = (event) =>
{
    const output = document.getElementById("output");
    //const buttonPressedId = event.target;
    if(output.value == "")
    {
        console.log('ps')
    }
}


const equals = (string) =>
{

}


