var video = document.getElementById('myVideo');
video.addEventListener('ended', () => {
    const videoElement = document.getElementById('myVideo');
    videoElement.style.opacity = 0;

    setTimeout(() => {
        var videoContainer = document.getElementById('video-container');
        videoContainer.parentNode.removeChild(videoContainer);
      }, 1000);
      document.getElementById('video-container').style.zIndex = -1;
});
document.getElementById("r").addEventListener("click", function()
{
    alert("13")
})