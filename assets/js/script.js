window.onload = function () {
  const menuOpener = document.querySelector(".menu-opener");
  const nav = document.querySelector(".menu nav");

  if (menuOpener && nav) {
    //se existir menu ativo ele pega e add o toggle ou seja o menu ativo.
    menuOpener.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }
};

let indexAtual = 0;
let vez = [0, 1, 2];
const sliders = document.querySelector(".banner .sliders"); //slide container
const slide = document.querySelectorAll(".banner .slide"); //slide
const pontos = document.querySelectorAll(".banner .pontos");
const banner = document.querySelector(".banner");

// Mudar slide manualmente
function mudarSlide(index) {
  indexAtual = index;
  //Move o carrosel
  sliders.style.transform = `translateX(-${indexAtual * 100}vw)`;

  //aiva o ponto.
  pontos.forEach((p) => p.classList.remove("active"));
  pontos[index].classList.add("active");
}

setInterval(() => {
  indexAtual++;
  if (indexAtual >= slide.length) {
    indexAtual = 0;
  }

  mudarSlide(indexAtual);
}, 3000);

pontos.forEach((ponto, index) => {
  ponto.addEventListener("click", () => mudarSlide(index));
});
