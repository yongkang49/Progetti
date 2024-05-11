const btn = document.body.querySelector("button");
btn.addEventListener("click",function()
{
    const width = 600;
    const height = 400;
    const left=(screen.width-width)/2
    const top=(screen.height-height)/2


    let newWindow=document.open("","","width = "+width+",height = "+height+",left = "+left+",top ="+top);
    let styleCSS = newWindow.document.createElement("link");
    styleCSS.rel="stylesheet";
    styleCSS.href = "style.css";
    newWindow.document.head.appendChild(styleCSS);
    let form = newWindow.document.createElement("form");
    form.classList="container";
    let user = newWindow.document.createElement("input");


    user.type = "text";
    user.placeholder="Nome Utente";
    user.required=true;


    let pwd = newWindow.document.createElement("input");
    pwd.type = "password";
    pwd.placeholder = "Password";
    pwd.required=true;


    let submit = newWindow.document.createElement("input");
    submit.type = "submit";
    submit.value = "Invia dati";


    form.appendChild(user);
    form.appendChild(pwd);
    form.appendChild(submit);
    newWindow.document.body.appendChild(form);

    
    let script2=newWindow.document.createElement("script");
    script2.src="script2.js"
    newWindow.document.body.appendChild(script2);
});
document.body.querySelector("p").textContent=localStorage.getItem("username")+"---"+localStorage.getItem("password");