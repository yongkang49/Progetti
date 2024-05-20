//array delle immagini di sfondo
const images = [
    'url("https://cdn2.unrealengine.com/genshin-impact-4-1920x1080-30df09f89d45.jpg")',
    'url("https://img.yanlutong.com/uploadimg/ico/2020/0916/1600225873641956.jpg")',
    'url("https://cdn2.unrealengine.com/image-2-3840x2160-75c677dd1705.jpg")',
    'url("https://p5.itc.cn/images01/20210115/49cd56306f91442bbac66390925b7a83.jpeg")',
    'url("https://cdn2.unrealengine.com/genshin-impact-4-1920x1080-30df09f89d45.jpg")',
]
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
const video = document.getElementById('myVideo');
video.addEventListener('ended', () => {
    const videoElement = document.getElementById('myVideo');
    videoElement.style.opacity = 0;
    setTimeout(() => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.parentNode.removeChild(videoContainer);
    }, 1000);
});