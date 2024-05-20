//Mondstantd page
const images = [
    'url("Img/Mondstadt/1.png")',
    'url("Img/Mondstadt/2.png")',
    'url("Img/Mondstadt/3.png")',
    'url("Img/Mondstadt/4.png")',
    'url("Img/Mondstadt/5.png")',
    'url("Img/Mondstadt/6.png")',
    'url("Img/Mondstadt/7.png")'
];
const titles =[
    "Mondstadt",
    "Lago Stellare",
    "Villaggio Acquachiara",
    "Cattedrale di Favonius",
    "Biblioteca dei Cavalieri di Favonius",
    "Tempio dei Mille Venti",
    "Valle Dadaupa"
];

const contents =[
    "Il vento porta lontano i semi di dente di leone, le canzoni e i racconti, e accompagna nel proprio regno i viaggiatori gentili. Mondstadt ti dà il benvenuto.",
    "In un poema si narra di come questo lago si sia formato in seguito alla caduta di una stella. Tuttavia, altri racconti narrano che persino le stelle discendono sulla terra per ammirarlo, poiché splende come gli occhi dell'Archon di Anemo.",
    "Una città di periferia pacifica e idilliaca. Fin da tempi antichi, è un luogo di caccia dalle dolci sorgenti. Qui si tramanda la leggenda di uno spirito benefico che dimora nelle acque del luogo.",
    "Un luogo sacro gestito dai seguaci più devoti dell'Archon di Anemo. In passato, era il maniero da cui l'aristocrazia sbandierava la propria supremazia.",
    "La biblioteca più fornita tra tutte quelle presenti nelle terre del nord. La gente comune può leggere tutti i libri custoditi qui, eccetto quelli contenuti nella sezione riservata.",
    "Le rovine di un antico anfiteatro dove si radunano mille venti armoniosi, che portano qui innumerevoli racconti per poi diffonderli in lungo e in largo.",
    "Dopo centinaia di anni, è tornata la pace. Questa foresta di lame contiene i ricordi di scontri tra gli spadaccini, di inni di battaglia dei guerrieri, di passi fragorosi dei mostri e di un cielo rosso come il sangue."
];

var myIndex = 0;
document.body.style.backgroundImage = images[myIndex];
document.getElementById("title").innerHTML = titles[myIndex];
document.getElementById("content").innerHTML = contents[myIndex];
document.body.querySelector(".paginationLeft").addEventListener("click", function(){
    if(myIndex <= 0)
        {
            myIndex = 6;
        }
        else
        {
            myIndex = (myIndex - 1) % images.length;
        }
    document.body.style.backgroundImage = images[myIndex];
    document.getElementById("title").innerHTML = titles[myIndex];
    document.getElementById("content").innerHTML = contents[myIndex];
});
document.body.querySelector(".paginationRight").addEventListener("click", function(){
    myIndex = (myIndex + 1) % images.length;
    document.body.style.backgroundImage = images[myIndex];
    document.getElementById("title").innerHTML = titles[myIndex];
    document.getElementById("content").innerHTML = contents[myIndex];
});