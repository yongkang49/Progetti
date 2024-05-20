//Mondstantd page
const images = [
    'url("Img/Inazuma/1.png")',
    'url("Img/Inazuma/2.png")',
    'url("Img/Inazuma/3.png")',
    'url("Img/Inazuma/4.png")',
    'url("Img/Inazuma/5.png")',
    'url("Img/Inazuma/6.png")',
    'url("Img/Inazuma/7.png")'
];
var myIndex = 0;
document.body.style.backgroundImage = images[myIndex];
document.body.querySelector(".paginationLeft").addEventListener("click", function(){
    if(myIndex <= 0)
        {
            myIndex = 6;
        }
        else
        {
            myIndex = (myIndex - 1) % images.length;
        }
    document.body.style.backgroundImage = images[myIndex];
});
document.body.querySelector(".paginationRight").addEventListener("click", function(){
    myIndex = (myIndex + 1) % images.length;
    document.body.style.backgroundImage = images[myIndex];
});