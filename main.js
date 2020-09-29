const nombre = "Conrado Cañas"

const experiencia = [
    {
        lugar: "EMDX",
        periodo: "Septiembre 2020 - Actualidad",
        descripción: "Actualmente trabajo como Front End Developer en EMDX, empresa dedicada a Blockchain y Criptomonedas. Entre mis funciones están el desarrollo y maquetado de componentes, vistas y gráficos para su plataforma de trading."
    },
    {
    lugar: "Freelancer",
    periodo: "2019 - 2020",
    descripción: "Montaje de sitios web para clientes de todo el mundo.<br> Trabajos realizados con WordPress y Woocommerce para tiendas online. Mas de 90 proyectos entregados en 23 paises. Se realizan las tareas de atención al cliente, desarrollo y capacitación en caso de ser necesario. Los proyectos necesitaron uso de CSS, HTML y JavaScript en menor medida."
    },
    {
    lugar: "Alto Brillo S.A.",
    periodo: "2012-2018",
    descripción: "Gerente General de Marca.<br> Liderando procesos de diseño y desarrollo de productos, coordinando personal y supervisando ventas mayoristas y minoristas. En este periodo de trabajo se logro aumentar un 500% en unidades vendidas semestralmente a mas de 100 clientes en todo Argentina. Contaba con un equipo de 6 personas a cargo en diferentes areas."
    }
];

const estudios = [{
    lugar: "Saul A. Taborda",
    periodo: "2008-2011",
    descripción: "Bachiller en Ciencias Naturales y Medio Ambiente"
    }
];

const lenguajesActuales = [
    "https://devicons.github.io/devicon/devicon.git/icons/vuejs/vuejs-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/visualstudio/visualstudio-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/github/github-original.svg",
    "https://devicon.dev/devicon.git/icons/bitbucket/bitbucket-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/slack/slack-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/photoshop/photoshop-plain.svg",
]

const lenguajesAprendiendo = [
    "https://devicons.github.io/devicon/devicon.git/icons/react/react-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original.svg"
]

// Cambia el nombre del H1 que con tiene el nombre del usuario
var nombreDOM = document.getElementById("name")
nombreDOM.innerText = nombre

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between mt-3">
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
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesActuales[i]}" />`
    document.getElementById("lenguajes_actuales").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`
    document.getElementById("lenguajes_aprendiendo").appendChild(item)
}


function printDiv(printable){
    var printContents = document.getElementById(printable).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}