//pull rate
var type = 3;
var pity = 0;
var lastF = 0;
function rate(pull, lastF)
{
    var r;
    if(pull <= 72)
    {
        r = 6; //0.6%
    }
}
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
            return 1;
        }
        if((Math.random() * 2) <= 1)
        {
            return 5; //赢了
        }else
        {
            return -5; //输了
        }
    }else
    {
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
        return 4;
    }
    else
    {
        return 4;
    }
}
function pull(times)
{
    for(var i = 0; i < times; i++)
    {
        add();
        var result = rate(pity, lastF)
        if(result ==  5 || result == -5)
        {
            pity = 0;
            type = 5;
        }
        if(result == 4)
        {
            lastF = 0;
            if(type != 5)
            {
                type = 4;
            }
        }
    }
    //animazione pull
    let background = document.getElementById("background")
    background.muted = true;
    //creazione video
    let video = document.createElement("video");
    video.id = "pull";
    video.classList.add("pullAni");
    document.body.appendChild(video);
    //cambiamenti src
    var src = "角色素材/single3.mp4"
    switch(type)
    {
        case 5:
            if(times == 1)
            {
                src = "角色素材/single5.mp4"
            }
            else
            {
                src = "角色素材/multi5.mp4"
            }
            break;
        case 4:
            if(times == 1)
            {
                src = "角色素材/single4.mp4"
            }
            else
            {
                src = "角色素材/multi4.mp4"
            }
            break;
    }
    video.src = src;
    video.play();
    //rimozione quando termina
    video.addEventListener("ended", function() {
        video.remove();
        background.muted = false;
    });
    //reset del tipo
    type = 3;
}
function add()
{
    pity++;
    lastF++;
}
const singleP = document.getElementById("singleP")
singleP.addEventListener("click", function(){pull(1)})
const multiP = document.getElementById("multiP")
multiP.addEventListener("click", function(){pull(10)})

