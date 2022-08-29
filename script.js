function number(event)
{
    const output = document.getElementById("output");
    const button = event.target;
    output.value = button.innerHTML;
}