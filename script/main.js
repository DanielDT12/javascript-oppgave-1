import { movieReview, pageDocs } from "./modules/movie-database.js"


function movieCard() {
    pageDocs.missionImpossible.innerHTML = `
    <div class="movie-card">
        <img src="${movieReview.movie1.moviePoster}" class="movie-poster">
        <div class="movie-info">
            <h3>
        </div>
    </div>`
}
