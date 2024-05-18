function Dettaglio(character) {
    const details = {
        liyue:{
            title:"Liyue",
            description:"liyue è bello",
        },
        zhongli: {
            title: "Zhongli",
            description: "Zhongli è il Geo Archon, conosciuto come Rex Lapis. Attualmente vive come consulente presso la Funeraria Wangsheng e possiede una conoscenza profonda della storia e della cultura di Liyue."
        },
        ningguang: {
            title: "Ningguang",
            description: "Ningguang è la Tianquan del Liyue Qixing. È famosa per la sua intelligenza e la sua abilità negli affari, e ha costruito il Jade Chamber, un simbolo della potenza commerciale di Liyue."
        }
        // Altri personaggi possono essere aggiunti qui
    };

    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');

    modalDetails.innerHTML = `<h2>${details[character].title}</h2><p>${details[character].description}</p>`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}