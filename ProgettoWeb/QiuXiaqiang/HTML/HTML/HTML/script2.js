let btn= document.querySelector('input[type="submit"]');
btn.addEventListener("click",function()
{
    let userName=documet.querySelector('input[type="text"]').value;
    
    let password=documet.querySelector('input[type="password"]').value;
    alert(userName + password)
    localStorage.setItem("Username",userName);
    localStorage.setItem("Password",password);




});