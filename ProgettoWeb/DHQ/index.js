//array delle immagini di sfondo
const images = [
    'url("Img/IndexBackImg/back1.jpg")',
    'url("Img/IndexBackImg/back2.jpg")',
    'url("Img/IndexBackImg/back3.jpg")',
    'url("Img/IndexBackImg/back4.jpg")',
    'url("Img/IndexBackImg/back5.jpg")',
];
//blocco cambio automatico dell'immagine di sfondo
let index = 0;
function changeBackgroundImage() {
    document.querySelector(".backImg").style.backgroundImage = images[index];
    index = (index + 1) % images.length;
}
setInterval(changeBackgroundImage, 3000);
changeBackgroundImage();
//fine blocco cambio automatico dell'immagine di sfondo

//blocco previews delle pagine
const linkPage = document.body.querySelectorAll(".menu a");
const PreShow = function(event)
{
    document.getElementById("a" + event.target.id).style.visibility = "visible";
}
const ClosePreShow = function(event)
{
    document.getElementById("a" + event.target.id).style.visibility = "hidden";
}
for(let i = 0; i < linkPage.length; i++)
{
    linkPage[i].addEventListener("mouseenter", PreShow);
}
for(let i = 0; i < linkPage.length; i++)
{
    linkPage[i].addEventListener("mouseleave", ClosePreShow)
}
//fine blocco previews delle pagine

//GET ELEMENT BY LOCAL STORAGE
//const par = document.body.querySelector("p");
//par.textContent = localStorage.getItem("username") + "   " + localStorage.getItem("password");

document.body.querySelector("#submit").addEventListener("click", function(){
    const username = document.getElementById("username").textContent;
    const password = document.getElementById("pwd").textContent;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
});
