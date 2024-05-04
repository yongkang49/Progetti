let secretNumber;
const rnd = function()
{
    secretNumber = Math.floor((Math.random()*10))+1;
    return secretNumber
}
secretNumber = rnd();
console.log(secretNumber);
document.body.querySelector("button").addEventListener("click", function()
{
    if(secretNumber == document.body.querySelector("input").value)
    {
        alert("valore inserito giusto")
    }else
    {
        alert("valore inserito errato")
    }
});
document.getElementById("reset").addEventListener("click", function()
{
    document.body.querySelector("input").value = null;
    secretNumber = rnd(secretNumber);
    console.log(secretNumber);
})
