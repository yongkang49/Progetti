function rate(pull, lastF)
{
    var r;
    if(pull <= 72)
    {
        r = 6; //0.6%
    }
    else if(pull == 90) //保底
    {
        r = 1000; //100%
    }else
    {
        r = ((pull - 72) * 60) + 6; //概率提升
    }
    if((Math.random() * 1000) <= r)
    {
        if((Math.random() * 2) <= 1)
        {
            return 1; //赢了
        }else
        {
            return 0; //输了
        }
    }else
    {
        return rateF(lastF);
    }
}
function rateF(lastF)
{
    var r;
    if(lastF >= 10) //以防刚好出金
    {
        return 2; //保底
    }
    else if((Math.random() * 100) < 5)
    {
        return 2; //出四星
    }
    else{
        return 3; //出垃圾
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