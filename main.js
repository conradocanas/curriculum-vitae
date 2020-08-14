const nombre = "Conrado Cañas"
const experiencia = [{
    lugar: "Freelancer",
    periodo: "2019-2020",
    descripción: "Montaje de sitios web"
    },
    {
    lugar: "Alto Brillo S.A.",
    periodo: "2012-2018",
    descripción: "Gerente de marca"
    },{
    lugar: "Rio Yuspe SRL",
    periodo: "2011",
    descripción: "Venta minorista y caja."
    }
];
const estudios = [{
    lugar: "Saul A. Taborda",
    periodo: "2008-2011",
    descripción: "Bachiller en Ciencias Naturales y Medio Ambiente"
    }
];

function init() {
    // Cambia el nombre del H1 que con tiene el nombre del usuario
    var nombreDOM = document.getElementById("name")
    nombreDOM.innerText = nombre

    // Itineración que crea los items en "Experiencia"
    for (i = 0; i < experiencia.length; i++){
        var item = document.createElement("div")
        item.innerHTML =
        `<div class="d-flex justify-content-between">
        <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
        <span class="exp-date">${experiencia[i].periodo}</span>
        </div>
        <p>${experiencia[i].descripción}</p>`
        document.getElementById("experiencia").appendChild(item)
    }

    // Itineración que crea los items en "Estudios"
    for (i = 0; i < estudios.length; i++){
        var item = document.createElement("div")
        item.innerHTML =
        `<div class="d-flex justify-content-between">
        <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
        <span class="exp-date">${estudios[i].periodo}</span>
        </div>
        <p>${estudios[i].descripción}</p>`
        document.getElementById("estudios").appendChild(item)
    }

}

function printDiv(printable){
    var printContents = document.getElementById(printable).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

}

init()