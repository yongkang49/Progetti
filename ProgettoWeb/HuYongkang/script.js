var myIndex = 0;
Change();
function Change() {
    var x = document.getElementsByClassName("mySlides");//prendo tutti gli immagini
    for (var i = 0; i < x.length; i++)//cambio la visibilità a tutti
    {
        x[i].style.display = "none";  
    }
    x[myIndex].style.display = "block";//fa vedere la prima immagine
    myIndex++;
    if (myIndex >= x.length) 
        {
            myIndex = 0
        }    
    setTimeout(Change, 4000);
}
/*
let t = ["https://cdn2.unrealengine.com/genshin-impact-4-1920x1080-30df09f89d45.jpg",
    
]
//``
console.log(`"url('${t[0]}')"`);
document.querySelector("body").style.backgroundImage = (`"url('${t[0]}')"`);
ChangeBack();
function ChangeBack() {
    myIndex++;
    if (myIndex > t.length) 
        {
            myIndex = 0
        }    
    setTimeout(ChangeBack, 4000);
}*/