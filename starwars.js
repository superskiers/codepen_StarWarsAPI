let movies = document.getElementsByClassName('movie');
let filmTitle = document.querySelector('#titleOfFilm');
let crawl = document.querySelector('#openingCrawl');

function fetchInfo(chosenFilm) {
  let url = 'https://swapi.co/api/films/' + chosenFilm;
  fetch(url)
  .then(response => response.json())
  .then(data => {
     updateInfo(data);
     console.log(data.episode_id); 
  })
  .catch(error => console.error(error))
  }

function updateInfo(data) {
  filmTitle.innerText = data.title;
  crawl.innerText = data.opening_crawl;
}

// This is for the multiple movies to choose from
for(var i = 0; i < movies.length; i++) { 
  movies[i].addEventListener("click", function() {
    var chosenFilm = this.value;
    fetchInfo(chosenFilm);
    resetAnimation();
    console.log("Clicked " + chosenFilm);
});
} 
