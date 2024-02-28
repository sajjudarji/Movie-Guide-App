let resultBox = document.getElementById("result-box");
let inputMovie = document.getElementById("inputMovie");
let searchButton = document.getElementById("srch-btn");

// console.log(inputMovieName);

let getmovie = () => {
  let movieName = inputMovie.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${ApiKey}`;

  if (movieName.length <= 0) {
    resultBox.innerHTML = `<h3 class ="error"> Please enter a Movie Name! </h3>`;
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.Response == "True") {
          resultBox.innerHTML = `
          <div class="maincontent-1">
            <div class="poster"><img src="${data.Poster}" alt="Movie poster" /></div>
            <div class="information">
              <div class="movieName">
                ${data.Title}
              </div>
              <div class="imdbrating">
              ${data.imdbRating}
              </div>
              <div class="ratedyeartime">
              <p>${data.Rated}</p>
              <p>${data.Year}</p>
              <p>${data.Runtime}</p>
              </div>
              <div class="genre">
              ${data.Genre}
              </div>
            </div>
          </div>
          <div class="maincontent-2">
            <div class="movieSummary">
              <h2>Plot:</h2>
              <p>
                ${data.Plot}
              </p>
            </div>
          <div class="movieCast">
            <h2>Cast:</h2>
            <p>
              ${data.Actors}
            </p>
          </div>
          </div>
          `;
        } else {
          resultBox.innerHTML = `<h3 class='mssg'>${data.Error}</h3>`;
        }
      })
      .catch(() => {
        resultBox.innerHTML = `<h3 class="mssg">Error Occured</h3>`;
      });
  }
};
searchButton.addEventListener("click", getmovie);
window.addEventListener("load", getmovie);
