function initializeEventHandlers() {
    const items = document.querySelectorAll('.main-content .item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.name;
            const description = item.dataset.description;
            const image = item.querySelector('img').src;
            const extraImage = item.dataset.image;

            const newWindow = window.open('', 'Finestra descrizione', 'width=500,height=350');
            newWindow.document.write(`
                <html>
                <head>
                    <title>${name}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
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
                    <p>${description}</p>
                    <img src="${image}" alt="${name}">
                    <img src="${extraImage}" alt="${name} Extra">
                </body>
                </html>
            `);
            newWindow.document.close();
        });
    });

    const zonaLink = document.getElementById('zona-link');
    zonaLink.addEventListener('click', (e) => {
        e.preventDefault();

        const newWindow = window.open('', 'Finestra dettaglio zona', 'width=600,height=400');
        newWindow.document.write(`
            <html>
            <head>
                <title>Dettaglio zona</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
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
        newWindow.document.close();
    });
}

document.addEventListener('DOMContentLoaded', initializeEventHandlers);