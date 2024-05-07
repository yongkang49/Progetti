const h1 = document.body.querySelectorAll("h1");
const f1 = function(event)
{
    this.textContent = event.type + "-" + event.target.id;
    this.style.backgroundColor = "pink";
    this.style.transition = "backgroun-color 3s";
    setTimeout(()=>{
        this.style.backgroundColor = "transparent";
    }, 3000);
}
h1[0].addEventListener("click", f1);
h1[1].addEventListener("mousedown", f1);
h1[2].addEventListener("mouseup", f1);
h1[3].addEventListener("mouseenter", f1);
h1[4].addEventListener("mouseleave", f1);