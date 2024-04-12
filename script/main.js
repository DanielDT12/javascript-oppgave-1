import { movieReview, pageDocs, movieReviewComments } from "./modules/movie-database.js"

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

pageDocs.showReview.addEventListener("click", showReviews);

function showReviews() {
    let commentsShown = pageDocs.reviewComments.style.display !== "none";

    pageDocs.reviewComments.style.display = commentsShown ? "none" : "grid";
    if (commentsShown) {
        pageDocs.reviewComments.innerHTML = "";
        return;
    }

    const numberOfReviews = movieReviewComments.length;

    for (let i = 0; i < numberOfReviews; i++) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        div.className = "review-comment-container";

        let randomReviewIndex = Math.floor(Math.random() * movieReviewComments.length);
        let randomReview = movieReviewComments[randomReviewIndex];

        p.textContent = randomReview;
        div.appendChild(p);
        pageDocs.reviewComments.appendChild(div);
    }
}
