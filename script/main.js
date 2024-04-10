import { movieReview, pageDocs } from "./modules/movie-database.js"

movieCard()


function movieCard() {
    for (let i = 0; i < 7; i++) {
        pageDocs.missionImpossible.innerHTML += `
            <div class="movie-card flex-row">
                <img src="${movieReview.movie1.moviePoster}" class="movie-poster" alt="Mission Impossible">
                <div class="movie-info flex-column space-between">
                    <h3 class="movie-card__title">${movieReview.movie1.title}</h3>
                    <div class="flex-row space-between">
                        <p>Imdb Rating: ${movieReview.movie1.imdbRating}</p>
                        <p>Genre: ${movieReview.movie1.genre}</p>
                    </div>
                    <div class="flex-row space-between">
                        <p>Release date: ${movieReview.movie1.releaseDate}</p>
                        <p>Age rating: ${movieReview.movie1.ageRating}</p>
                    </div>
                    <div>
                        <p>Runtime: ${movieReview.movie1.runTime}</p>
                    </div>
                </div>
            </div>`
        };
    
};



console.log(pageDocs)

