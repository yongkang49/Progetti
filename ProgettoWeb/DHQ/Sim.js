//video
const backV = document.createElement("video");
backV.src = "imageSim/background.mp4";
backV.id = id="background";
backV.autoplay = true;
backV.loop = true;
backV.classList.add("background");
document.body.appendChild(backV);
backV.load();
console.log("video add");
//var char
var up5 = "8";
var up4 = ["36", "29", "3"];
//button sound
function buttonSound() {
    const sound = document.createElement("audio");
    sound.src = "soundSim/buttonSound.mp3";
    sound.play();
    sound.addEventListener("ended", function () {
        sound.remove();
    })
}
//pull rate
var type = 3;
var pity = 0;
var lastF = 0;
function rate(pull, lastF) {
    var r;
    if (pull <= 72) {
        r = 6; //0.6%
    }
}
function rate(pull, lastF, lastG) {
    var r;
    if (pull <= 73) {
        r = 6; //0.6%
    }
    else if (pull == 90) //保底
    {
        r = 1000; //100%
    } else {
        r = ((pull - 73) * 60) + 6; //概率提升
    }
    if ((Math.random() * 1001) <= r) {
        if (lastG == 90) {
            return 1;
        }
        if ((Math.random() * 3) <= 1) {
            return 5; //赢了
        } else {
            return -5; //输了
        }
    } else {
        return rateF(lastF);
    }
}
function rateF(lastF) {
    var r = 5;
    if (lastF >= 5) {
        r = (lastF - 4) * 200 + 5;
    }
    if (lastF >= 10) //以防刚好出金
    {
        return fUp() //保底
    }
    else if ((Math.random() * 101) < 7) {
        return fUp() //出四星
    }
    else {
        return 3; //出垃圾
    }
}
function fUp() {
    if (Math.random() * 11 > 7) {
        return 4;
    }
    else {
        return -4;
    }
}
function pull(times) {
    var typeChar;
    const images = new Array(times);
    for (var i = 0; i < times; i++) {
        add();
        var result = rate(pity, lastF)
        if (result == 5 || result == -5) {
            pity = 0;
            type = 5;
            typeChar = 5;
        }
        if (result == 4 || result == -4) {
            lastF = 0;
            if (type != 5) {
                type = 4;
                typeChar = 4;
            }
        }
        else {
            typeChar = 3;
        }
        //GET PHOTO
        images[i] = document.createElement("img");
        images[i].classList.add("wishImage");
        switch (result) {
            case 5:
                images[i].src = "imageSim/5Star/" + up5 + ".webp";
                break;
            case -5:
                var p = Math.floor(Math.random() * 8) + 1;
                images[i].src = "imageSim/5Star/" + p + ".webp"; //valore random tra 1 e 8
                break;
            case 4:
                var rnd = Math.floor(Math.random() * 3) + 1; //valore random tra 1 e 3
                switch (rnd) {
                    case 1:
                        rnd = up4[0];
                        break;
                    case 2:
                        rnd = up4[1];
                        break;
                    case 3:
                        rnd = up4[2];
                        break;
                }
                images[i].src = "imageSim/4Star/" + rnd + ".webp";
                break;
            case -4:
                var p = Math.floor(Math.random() * 36) + 1;
                images[i].src = "imageSim/4Star/" + p + ".webp"; //valore random tra 1 e 36
                break;
            case 3:
                images[i].src = "imageSim/qiqi/" + "qiqi" + ".webp";
                break;
        }
    }
    //animazione pull
    const background = document.getElementById("background");
    background.muted = true;
    //creazione video
    const video = document.createElement("video");
    video.classList.add("pullAni");
    document.body.appendChild(video);
    //cambiamenti src
    var src = "imageSim/Pull/single3.mp4"
    switch (type) {
        case 5:
            if (times == 1) {
                src = "imageSim/Pull/single5.mp4"
            }
            else {
                src = "imageSim/Pull/multi5.mp4"
            }
            break;
        case 4:
            if (times == 1) {
                src = "imageSim/Pull/single4.mp4"
            }
            else {
                src = "imageSim/Pull/multi4.mp4"
            }
            break;
    }
    video.src = src;
    video.play();
    //tasto skip animazione
    const skip = document.createElement("img");
    skip.src = "imageSim/skip.png"
    skip.classList.add("skip");
    document.body.appendChild(skip);
    skip.addEventListener("click", function () {
        //suono per il bottone skip
        buttonSound();
        end();
    })
    video.addEventListener("ended", function () {
        end();
    });
    //funzione termine animazione
    function end() {
        video.remove();
        background.muted = false;
        skip.remove();
        const wishBackground = document.createElement("img");
        wishBackground.src = "imageSim/background.webp";
        wishBackground.classList.add("wishBackground");
        document.body.appendChild(wishBackground);
        images.forEach((image) => {
            document.body.appendChild(image);
        });
        //moovimento delle immagini
        const containerWidth = window.innerWidth;   //larghezza dello dello schermo
        const totalImages = images.length;  //numero di immagini
        const imageWidth = images[0].offsetWidth; //larghezza di un'immagine
        const distanza = 25; // distanza tra le iimmagini px
        const totalImageWidth = totalImages * imageWidth + (totalImages - 1) * distanza;//calcolo la larghezza di tutte le immagini con la larghezza
        let partenza = (containerWidth - totalImageWidth) / 2;//calcolo punto della prima foto
        //posizionamento di tutte le immagini
        images.forEach((image) => {
            image.style.right = partenza + 'px';//assegnamento della posizione rispetto a
            partenza += imageWidth + distanza;//cambia posizione per le immagini
            clickedLock = true;
        });
        //rimozione oggetti e il pulsante per uscire
        const finish = document.createElement("img");
        finish.src = "imageSim/finish.png";
        finish.classList.add("finish");
        document.body.appendChild(finish);
        finish.addEventListener("click", function () {
            buttonSound();
            wishBackground.remove();
            images.forEach((image) => {
                image.remove();
            });
            finish.remove();
        })
        var number = pity.toString();
        const number1 = document.getElementById("number1");
        const number2 = document.getElementById("number2");
        number1.src = "imageSim/numbers/" + number[0] + ".png";
        number2.src = "imageSim/numbers/" + number[1] + ".png";
    }
    //reset del tipo
    type = 3;
}
//add pity and lastF
function add() {
    pity++;
    lastF++;
}
//click 1 pull
const singleP = document.getElementById("singleP")
singleP.addEventListener("click", function () {
    buttonSound();
    setTimeout(() => pull(1), 10); //attende per 0.1 secondo per l'audio
})
//click 10 pull
const multiP = document.getElementById("multiP")
multiP.addEventListener("click", function () {
    buttonSound();
    setTimeout(() => pull(10), 10);
})
//click logo
const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
    buttonSound();
})

