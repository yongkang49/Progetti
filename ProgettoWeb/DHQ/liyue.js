// Funzione che inizializza i gestori degli eventi
function initializeEventHandlers() {
    // Seleziona tutti gli elementi con la variabile  all'interno di .main-content
    const variabile = document.querySelectorAll('.main-content .item');

    // Per ogni elemento trovato, aggiunge un evento
    variabile.forEach(item => {
        item.addEventListener('click', () => {
            // Ottiene i dati dai variabili
            const name = item.dataset.name;
            const descrizione = item.dataset.description;
            const image = item.querySelector('img').src;
            const immagineNuove = item.dataset.image;

            // Apre una nuova finestra per visualizzare il personaggio
            const newWindow = window.open('', 'Finestra descrizione', 'width=500,height=350');
            // Scrive l'HTML nella nuova finestra con il nome, la descrizione e le immagini del personaggio
            newWindow.document.write(`
                <html>
                <head>
                    <title>${name}</title>
                    <style>
                        body {
                            font-family: Arial;
                            text-align: center;
                            padding: 20px;
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                        }
                        h2 {
                            margin-top: 0;
                        }
                    </style>
                </head>
                <body>
                    <h2>${name}</h2>
                    <p>${descrizione}</p>
                    <img src="${image}" alt="${name}">
                    <img src="${immagineNuove}" alt="${name}">
                </body>
                </html>
            `);
            // Chiudo il documento per completare la scrittura
            newWindow.document.close();
        });
    });

    // Seleziona il link con finestra
    const finestra = document.getElementById('zona-link');
    // Aggiunge un evento 'click' al link
    finestra.addEventListener('click', (e) => {
        // Previene il comportamento predefinito del link
        e.preventDefault();

        // Apre una nuova finestra per visualizzare i dettagli che ho aggiunti
        const newWindow = window.open('', 'Finestra dettaglio zona', 'width=500,height=350');
        // Scrive l'HTML nella nuova finestra con le informazioni e le immagini scritte nell'index html
        newWindow.document.write(`
            <html>
            <head>
                <title>Dettaglio zona</title>
                <style>
                    body {
                        font-family: Arial;
                        text-align: center;
                        padding: 20px;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                    h2 {
                        margin-top: 0;
                    }
                </style>
            </head>
            <body>
                <h2>Liyue/璃月</h2>
                <p>Liyue è un'area importante nel gioco "Genshin Impact", situata nella parte meridionale di Mondstadt. Questa zona è famosa per il suo stile orientale unico e l'atmosfera misteriosa. Liyue è un luogo conosciuto come la "Terra delle arti marziali" con una ricca storia e un patrimonio culturale.</p>
                <img src="https://patchwiki.biligame.com/images/ys/5/59/rhpuxei05r1mvpnuz1q9t6bdet308ok.png" alt="Immagine">
                <img src="https://patchwiki.biligame.com/images/ys/b/b8/dtkwm4pl8qb4cjaxrpx4j7xruv285gm.png" alt="Immagine">
            </body>
            </html>
        `);
        // Chiude il documento per completare la scrittura
        newWindow.document.close();
    });
}

// Aggiunge un evento che si attiva quando il documento è completamente caricato
document.addEventListener('DOMContentLoaded', initializeEventHandlers);