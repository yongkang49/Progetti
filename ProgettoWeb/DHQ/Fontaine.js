// Funzione che inizializza i gestori degli eventi
function finestra() {
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
            <h2>Fontaine/枫丹</h2>
            <p>La zona di Fontaine è circondata da fitte foreste e fiumi tortuosi, con quattro stagioni distinte e un clima piacevole. In primavera i fiori sono in piena fioritura e il profumo trabocca d'estate, gli alberi sono ombrosi e il fiume è fresco, in autunno le foglie dell'acero si tingono di rosso e il paesaggio è gradevole, in inverno la neve; con la neve e il paesaggio è pittoresco. Questo ambiente naturale diversificato non solo porta ricchi prodotti a Fontaine, ma aggiunge anche un divertimento senza fine alla vita dei residenti.</p>
            <img src="https://patchwiki.biligame.com/images/ys/0/01/eafh8clrwwoc4jladmcnhbnix63flby.png" alt="Immagine">
            <img src="https://patchwiki.biligame.com/images/ys/6/62/lfhil14ilz2r2dfblt6jy2lop2cfheb.png" alt="Immagine">
            </body>
            </html>
        `);
        // Chiude il documento per completare la scrittura
        newWindow.document.close();
    });
}

// Aggiunge un evento che si attiva quando il documento è completamente caricato
document.addEventListener('DOMContentLoaded', finestra);