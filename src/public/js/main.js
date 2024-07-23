let currentIndex = 0;
const moviesPerPage = 5;
//TELA CARREGANDO:
function showMovies() {
    const container = document.getElementById('movie-container');
    const totalMovies = document.querySelectorAll('.movie-item').length;
  
    //MOVIMENTA NO EIXO X de acordo com currentIndex(pagina atual)/numeroDefilmes %
    //CurrentIndex começa com 0 e recebe 5 a cada interação com o botão nextBtn.
    container.style.transform = `translateX(-${currentIndex * 100 / moviesPerPage}%)`;

    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex + moviesPerPage >= totalMovies;
}

function nextMovies() {
    const totalMovies = document.querySelectorAll('.movie-item').length;
    if (currentIndex + moviesPerPage < totalMovies) {
        currentIndex += moviesPerPage;
        showMovies();
    }
}

function prevMovies() {
    if (currentIndex - moviesPerPage >= 0) {
        currentIndex -= moviesPerPage;
        showMovies();
    }
}

document.getElementById('nextBtn').addEventListener('click', nextMovies);
document.getElementById('prevBtn').addEventListener('click', prevMovies);

document.addEventListener('DOMContentLoaded', showMovies);
