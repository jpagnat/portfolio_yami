const proyectos = [
  {
    title: "Zab! DECO",
    img: "./img/proyectos/zab.png",
    description: "Community Manager",
    back: "",
    page: "https://drive.google.com/file/d/13d54-Lso9xlUKeiO8wffs-m1JDYEYteb/view?usp=sharing",
    github: "https://www.coderhouse.es/certificados/60e3576c9fc3b800117c82ed",
    tecnologias: "",
  },
  {
    title: "Vetapp",
    img: "./img/proyectos/vetapp.png",
    description: "Diseño UX/UI",
    back: "",
    page: "https://drive.google.com/file/d/1HXyLT-9tG0_NBOUxwC8rdF-G7H_yU28O/view?usp=sharing",
    github: "https://www.coderhouse.es/certificados/640f2a51f6417e000edd28de",
    tecnologias: "",
  },
  {
    title: "Chalten Wines ",
    img: "./img/proyectos/chalten.png",
    description: "Publicidad en Redes",
    back: "",
    page: "https://drive.google.com/file/d/1i1WtDQbufDVJ5_3guYXIy4o7eSEWfbCT/view?usp=sharing",
    github: "https://www.coderhouse.es/certificados/6147a2bdd084970017c26955",
    tecnologias: "",
  },
  {
    title: "Team Granola",
    img: "./img/proyectos/granola.png",
    description: "E-commerce",
    back: "",
    page: "https://drive.google.com/file/d/1L5ERrQAhP0S4D3KI2yhD10SWJ0FWyVwo/view",
    github: "https://www.coderhouse.es/certificados/6258c3cd36ad640024054401",
    tecnologias: "",
  },
  {
    title: "ZAB! DECO",
    img: "./img/proyectos/zabdeco.png",
    description: "Growth Marketing",
    back: "",
    page: "https://drive.google.com/file/d/1AJAYRhP6IQJEjSlSmdZDLEovZFoK8fQr/view",
    github: "https://www.coderhouse.es/certificados/61a7a149b9bf700030aa4b92",
    tecnologias: "",
  },
  {
    title: "Chalten Wines",
    img: "./img/proyectos/wine.png",
    description: "Product Manager",
    back: "",
    page: "https://drive.google.com/file/d/1lnE-13Fd49hZrPnz1pLAIhJmd4orpKVo/view",
    github: "https://www.coderhouse.es/certificados/62227b67225eaf0027673157",
    tecnologias: "",
  },
];

const cardContainer = document.querySelector(".work__projects");

function loadCards() {
  for (let i = 0; i < proyectos.length; i++) {
    cardContainer.innerHTML += `
    <div class="card">
      <div class="content">
        <div id=${i} class="front"></div>
        <div class="back">
          <h3 class='back__title'>${proyectos[i].title}</h3>
          <p class='back__description'>${proyectos[i].description}</p>
          <p class='back__tecnologias'> ${proyectos[i].tecnologias} </p>
          <div class='back__a'>
            <a href=${proyectos[i].github} target='_blank'>Certificación <i class="fa-solid fa-check"></i></a>
            <a href=${proyectos[i].page} target='_blank'>Proyecto <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </div>`;

    const el = document.getElementById(i);
    el.style.backgroundImage = `url(${proyectos[i].img})`;
  }
}

loadCards();
