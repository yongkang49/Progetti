//creazione di un form
const btn = document.body.querySelector("button");
btn.addEventListener("click", function()
{
    const width = 600;
    const height = 400;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let newwindow = document.open("", "", "width ="+ width +","+ "height =" + height +","+ "left =" + left +","+ "top =" + top);
    
    
    let style = newwindow.document.createElement("link")
    style.rel = "stylesheet"
    style.href = "style.css"
    newwindow.document.head.appendChild(style);

    let form = newwindow.document.createElement("form");
    form.classList = "container"

    let user = newwindow.document.createElement("input");
    user.type = "text";
    user.placeholder = "user";
    user.required = true;
    let pwd = newwindow.document.createElement("input");
    pwd.type = "password";
    pwd.placeholder = "password";
    pwd.required = true;
    let submit = newwindow.document.createElement("input");
    submit.type = "submit";
    submit.value = "invia dati";
     
    form.appendChild(user);
    form.appendChild(pwd);
    form.appendChild(submit);
    //newwindow.document.body.appendChild(user);
    //newwindow.document.body.appendChild(pwd);
    //newwindow.document.body.appendChild(submit);
    newwindow.document.body.appendChild(form);
    let script2 = newwindow.document.createElement("script");
    script2.src = "script2.js";
    newwindow.document.body.appendChild(script2);
}) 
const par = document.body.querySelector("p");
par.textContent = localStorage.getItem("username") + "   " + localStorage.getItem("password");

