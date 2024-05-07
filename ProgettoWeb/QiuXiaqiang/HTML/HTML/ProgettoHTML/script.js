const HElements = document.body.querySelectorAll("h1");
const logEvent = function(event)
{
    
    this.textContent=event.type + "-" + event.target.id + "-" + event.target.classList;
    this.sytle.backgroundColor = "red";
    this.style.transition ="background-color 3s";
    setTimeout(()=>{
        this.style.background = "transparent";
    },3000);
}
HElements[0].addEventListener("click",logEvent);
HElements[1].addEventListener("mousedown",logEvent);
HElements[2].addEventListener("mouseup",logEvent);
HElements[3].addEventListener("mouseenter",logEvent);
HElements[4].addEventListener("mouseleave",logEvent);
