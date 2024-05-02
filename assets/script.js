const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables et constantes nécessaires au projet

const numberOfSlide = slides.length;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
let position = 0;

// Création des fonctions sur les flèches

arrowLeft.addEventListener("click", function () {
  if (position == 0) {
    position = numberOfSlide - 1;
  } else {
    position--;
  }
  updateSlide();
});

arrowRight.addEventListener("click", function () {
  if (position == numberOfSlide - 1) {
    position = 0;
  } else {
    position++;
  }
  updateSlide();
});

// Création d'une fonction pour créer les "dots" selon le nombre de photos

function creationDots() {
  const dots = document.querySelector(".dots");
  for (let i = 0; i < numberOfSlide; i++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dots.appendChild(dot);
  }
}

// Création d'une fonction pour associer le bon "dot" à l'image sélectionée

function currentDot() {
  const listDots = document.querySelectorAll(".dot");
  for (let i = 0; i < listDots.length; i++) {
    const dot = listDots[i];
    if (i == position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}

// Création d'une fonction pour mettre à jour l'image et le texte

function updateSlide() {
  bannerImage.src = "./assets/images/slideshow/" + slides[position].image;
  bannerText.innerHTML = slides[position].tagLine;
  currentDot();
}

// Exécution des fonctions

creationDots();
updateSlide();
