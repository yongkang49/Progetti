const h = document.body.querySelectorAll("h1");
const logEvent = function(event)
{
    //alert(event.target.classlist);
    //alert(event.target.id);
    //alert(event.type);
    this.textContent = event.type + ' ' + event.target.id;
    this.style.backgroundColor = "yellow";
    this.style.transition = "background-color 3s";
    setTimeout(() =>{
        this.style.backgroundColor = "transparent";
    }, 3000);
}
h[0].addEventListener("click", logEvent);
h[1].addEventListener("mousedown", logEvent);
h[2].addEventListener("mouseup", logEvent);
h[3].addEventListener("mouseenter", logEvent);
h[4].addEventListener("mouseleave", logEvent);
