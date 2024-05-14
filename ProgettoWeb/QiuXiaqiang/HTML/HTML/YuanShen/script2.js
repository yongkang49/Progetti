const btn = document.querySelector('input[type = "submit"]');
btn.addEventListener("click", function(){
    let username = document.querySelector('input[type = "text"]').value;
    let password = document.querySelector('input[type = "password"]').value;
    alert(username + password);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
})