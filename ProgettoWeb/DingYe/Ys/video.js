var video = document.getElementById('myVideo');
video.addEventListener('ended', function() { 
    const videoElement = document.getElementById('myVideo');
    videoElement.style.opacity = 0; 
    videoElement.remove(); 
}); 
document.body.querySelector("button").addEventListener("click", function(){ 
    alert("13"); 
})