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
const lenguajesActuales =
[
    "https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/visualstudio/visualstudio-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/github/github-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/wordpress/wordpress-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/slack/slack-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/photoshop/photoshop-plain.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Microsoft_Excel_2013_logo.svg/782px-Microsoft_Excel_2013_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Word_2013_logo.svg/611px-Microsoft_Word_2013_logo.svg.png"
]
const lenguajesAprendiendo =
[
    "https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/vuejs/vuejs-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/angularjs/angularjs-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original.svg"
]

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

    // Itineración que crea los items en "Lenguajes y programas"
    for (i = 0; i < lenguajesActuales.length; i++){
        var item = document.createElement("div")
        item.innerHTML = `<img style="margin-right: 15px" align="left" alt="JavaScript" width="40" src="${lenguajesActuales[i]}" />`
        document.getElementById("lenguajesActuales").appendChild(item)
    }

    // Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
    for (i = 0; i < lenguajesAprendiendo.length; i++){
        var item = document.createElement("div")
        item.innerHTML = `<img style="margin-right: 15px" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`
        document.getElementById("lenguajesAprendiendo").appendChild(item)
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