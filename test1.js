'use strict';

const numberOfFilms = prompt('How much movies are you watching?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gentres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {

    let movie = prompt('Last movie', '');
    let imdb = prompt('IMDB', '');
    personalMovieDB.movies[movie] = imdb;

}

console.log(personalMovieDB);