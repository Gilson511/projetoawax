window.onload = function () {
    document.querySelector(".menu").addEventListener("click", function () {
        let menuList = document.querySelector(".menu nav");

        if (window.innerWidth <= 798) {
            let displayAtual = window.getComputedStyle(menuList).display;
            menuList.style.display = displayAtual === "none" ? "flex" : "none";
        }
    });

};

let indexAtual = 0;
let vez = [0,1,2];
const sliders = document.querySelector('.sliders');
const pontos = document.querySelectorAll('.pontos');
const banner = document.querySelector('.banner');


setInterval(() => {
    indexAtual++;
    if (indexAtual > vez.length - 1) {
        indexAtual = 0;

    }

    mudarSlide(indexAtual);
}, 2000)

// Mudar slide manualmente
function mudarSlide(index) {
    indexAtual = index;
    pontos.forEach(ponto => ponto.classList.remove('active'));
    pontos[index].classList.add('active');

    if (index === 0) {
        banner.style.backgroundImage = "url('../media/foto4.jpg')";
    } else {
        if (index === 1) {
            banner.style.backgroundImage = "url('../media/foto6.jpg')";
        } else {
            if (index == 2) {
                banner.style.backgroundImage = "url('../media/foto7.jpg')"
            }

        }

    }
}






