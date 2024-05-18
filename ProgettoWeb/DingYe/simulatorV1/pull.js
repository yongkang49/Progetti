function rate(pull, lastF)
{
    var r;
    if(pull <= 72)
    {
        r = 6; //0.6%
    }
   var up5 = 25;
var Fs = [1, 2, 3, 4, 5, 6, 7];
var Up4 = [1, 2, 3]
var type;

function rate(pull, lastF, lastG)
{
    var r;
    if(pull <= 73)
    {
        r = 6; //0.6%
    }
    else if(pull == 90) //保底
    {
        r = 1000; //100%
    }else
    {
        r = ((pull - 73) * 60) + 6; //概率提升
    }
    if((Math.random() * 1000) <= r)
    {
        if(lastG == 90)
        {
            type = 5;
            return 1;
        }
        if((Math.random() * 2) <= 1)
        {
            type = 5;
            return 1; //赢了
        }else
        {
            type = 6;
            return 0; //输了
        }
    }else
    {
        type = 4;
        return rateF(lastF);
    }
}
function rateF(lastF)
{
    if(lastF >= 10) //以防刚好出金
    {
        return fUp() //保底
    }
    else if((Math.random() * 100) < 5)
    {
        return fUp() //出四星
    }
    else{
        return 3; //出垃圾
    }
}
function fUp()
{
    if(Math.random() * 10 > 5)
    {
        return Up4[Math.random() * Up4.length]
    }
    else
    {
        return Math.random() * 100;
    }
}
var pity = 0;
var lastF = 0;
const pull1 = document.body.querySelector('button[id = "one"]');
const pull10 = document.body.querySelector('button[id = "ten"]');
const pity_ = document.body.querySelector("h1");
function pull(times)
{
    for(var i = 0; i < times; i++)
    {
        add();
        var result = rate(pity, lastF)
        console.log(result);
        if(result < 3)
        {
            alert(result);
        }
        if(result ==  1 || result == 0)
        {
            pity = 0;
        }
        if(result == 2)
        {
            lastF = 0;
        }
        pity_.textContent = pity;
    }
}
function add()
{
    pity++;
    lastF++;
}
pull1.addEventListener("click", function(){
    pull(1);
})
pull10.addEventListener("click", function(){
    pull(10);
})
