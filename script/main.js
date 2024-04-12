import { movieReview, pageDocs } from "./modules/movie-database.js"

movieCard()

function movieCard() {
    pageDocs.missionImpossible.innerHTML = '';
    for (let i = 1; i <= Object.keys(movieReview).length; i++) {
        const movie = movieReview[`movie${i}`]; 
        pageDocs.missionImpossible.innerHTML += `
            <div class="movie-card flex-row">
                <img src="${movie.moviePoster}" class="movie-poster" alt="${movie.title}" />
                <div class="movie-info flex-column space-between">
                    <h3 class="movie-card__title">${movie.title}</h3>
                    <div class="flex-row space-between">
                        <p>Imdb Rating: ${movie.imdbRating}</p>
                        <p>Genre: ${movie.genre}</p>
                    </div>
                    <div class="flex-row space-between">
                        <p>Release date: ${movie.releaseDate}</p>
                        <p>Age rating: ${movie.ageRating}</p>
                    </div>
                    <div>
                        <p>Runtime: ${movie.runTime}</p>
                    </div>
                </div>
            </div>`;
    }
};
