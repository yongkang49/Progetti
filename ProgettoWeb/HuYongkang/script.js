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