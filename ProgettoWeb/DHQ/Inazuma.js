//Mondstantd page
const images = [
    'url("Img/Inazuma/1.png")',
    'url("Img/Inazuma/2.png")',
    'url("Img/Inazuma/3.png")',
    'url("Img/Inazuma/4.png")',
    'url("Img/Inazuma/5.png")',
    'url("Img/Inazuma/6.png")',
    'url("Img/Inazuma/7.png")'
];
const titles =[
    "Isola di Narukami",
    "Città d'Inazuma",
    "Foresta sacra al chiaro di luna",
    "Gran Santuario di Narukami",
    "Punto d'osserva delle isole di Tatara",
    "Fossa Tettonica",
    "Testa del Serpente"
];
const contents =[
    "La leggenda narra che, centinaia di anni fa, Hiiragi Hiroshi della Commissione Kanjou trasformò, come per miracolo, un'isola deserta in una fiorente area commerciale, il che colpì molto la Shogun. Durante il periodo in cui il Decreto Sakoku fu in vigore, la Commissione Kanjou continuò a prosperare. Tuttavia, col tempo, i mercanti provenienti da terre lontane iniziarono a diminuire e le strade smisero di essere movimentate come lo erano un secolo prima. Forse, quest'esempio non fa che rispecchiare gli affari dei mortali, poiché dimostra quanto fugace sia il successo ner chi l'ha ottenuto in breve temno. ",
    "Camminando sui sentieri consumati della periferia della Città d'Inazuma, si riesce a percepire un'atmosfera di antichità e di tranquillità. A quanto pare, la prosperità della città non ha cambiato il panorama di quest'area. Anche qui si può osservare il potere e la grazia della Shogun, che fornisce a questo luogo una calma e una vitalità diversa da quella cittadina. ",
    "La leggenda narra che, in passato, molti demoni dimoravano nella foresta sacra, e tutt'ora questo pacifico bosco è noto per la leggenda avente a che fare coi tanuki. ",
    "Il Gran Santuario di Narukami, ossia il santuario più grande d'Inazuma, protegge il Sakura sacro ed è situato sulla cima del Monte Yougou. Dà al popolo di Inazuma il conforto e la pace di cui ha bisogno in questi tempi difficili. ",
    "Il terreno di questo atollo è frastagliato e roccioso, rendendolo la perfetta barriera naturale per le fonderie qui presenti. Il magnifico e imponente altoforno produce un flusso costante di Acciaio di giada d'alta qualità. Tuttavia, di recente, la guerra ha danneggiato la Fornace Mikage, che portava avanti la produzione. ",
    "Secondo la leggenda, è qui che il dio serpente ricevette il colpo di grazia. Ancora oggi in questo profondo canyon dell'Isola di Yashiori risuona l'eco dei fulmini, come se gli spiriti del tuono stessero ancora parlando della scena leggendaria che divorò il cielo e la terra millenni d'anni fa...",
    "Secondo la leggenda, il serpente gigante che una volta si avventurò negli abissi marini fu ucciso sull'Isola di Yashiori. Si dice anche che, quando la brezza marina soffia tra gli occhi e le zanne aguzze del serpente gigante, si può sentire un fischio nel vento. Esso non è altro che il requiem che il mostro ha composto per sé stesso, e che ora dà pace a coloro che sono caduti in battaglia o che hanno perso la loro casa a causa della guerra."
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
