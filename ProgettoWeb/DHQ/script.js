const images = [
    'url("https://cdn2.unrealengine.com/genshin-impact-4-1920x1080-30df09f89d45.jpg")',
    'url("https://img.yanlutong.com/uploadimg/ico/2020/0916/1600225873641956.jpg")',
    'url("https://cdn2.unrealengine.com/image-2-3840x2160-75c677dd1705.jpg")',
    'url("https://p5.itc.cn/images01/20210115/49cd56306f91442bbac66390925b7a83.jpeg")',
    'url("https://cdn2.unrealengine.com/genshin-impact-4-1920x1080-30df09f89d45.jpg")',
]
let i = 0;
function changeBackgroundImage() {
    document.body.style.backgroundImage = images[i];
    i = (i + 1) % images.length;
}
setInterval(changeBackgroundImage, 5000);
changeBackgroundImage();

const pagine = ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine"];
i = 0;
function PreShow(i)
{
    document.getElementById("a" + pagine[i]).addEventListener("mouseenter", function(){
        document.getElementById(pagine[i].toString()).style.display = "block";
        document.getElementById("a" + pagine[i]).addEventListener("mouseleave", function(){
            document.getElementById(pagine[i]).style.display = "none";
        });
    });
}