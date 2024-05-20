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

//blocco per video home page
const video = document.getElementById('myVideo');
video.addEventListener('ended', () => {
    const videoElement = document.getElementById('myVideo');
    videoElement.style.opacity = 0;
    setTimeout(() => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.parentNode.removeChild(videoContainer);
    }, 1000);
});
//fine blocco per video home page