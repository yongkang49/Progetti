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
                    <img src="${extraImage}" alt="${name} ">
                </body>
                </html>
            `);
            newWindow.document.close();
        });
    });

    const zonaLink = document.getElementById('zona-link');
    zonaLink.addEventListener('click', (e) => {
        e.preventDefault();

        const newWindow = window.open('', 'Finestra dettaglio zona', 'width=500,height=350');
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
                <h2>Liyue/璃月</h2>
                <p>Liyue è un'area importante nel gioco "Genshin Impact", situata nella parte meridionale di Mondstadt. Questa zona è famosa per il suo stile orientale unico e l'atmosfera misteriosa. Liyue è un luogo conosciuto come la "Terra delle arti marziali" con una ricca storia e un patrimonio culturale.</p>
                <img src="https://patchwiki.biligame.com/images/ys/5/59/rhpuxei05r1mvpnuz1q9t6bdet308ok.png" alt="Immagine">
                <img src="https://patchwiki.biligame.com/images/ys/b/b8/dtkwm4pl8qb4cjaxrpx4j7xruv285gm.png" alt="Immagine">
            </body>
            </html>
        `);
        newWindow.document.close();
    });
}

document.addEventListener('DOMContentLoaded', initializeEventHandlers);