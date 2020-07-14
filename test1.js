'use strict';

const numberOfFilms = prompt('How much movies are you watching?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gentres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//
//     let movie = prompt('Last movie', '');
//     let imdb = prompt('IMDB', '');
//
//     if(movie && (movie.length < 50) && imdb) {
//         personalMovieDB.movies[movie] = imdb;
//     } else {
//         alert('Please, enter correct data');
//         i--;
//     }
//
// }

let i = 0;
do {
    let movie = prompt('Last movie', '');
    let imdb = prompt('IMDB', '');

    if(movie && (movie.length < 50) && imdb) {
        personalMovieDB.movies[movie] = imdb;
        i++;
    } else {
        alert('Please, enter correct data');
    }

} while (i < 2);


if(personalMovieDB.count <= 10) {
    console.log('мало')
} else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30 ) {
    console.log('норм')
} else if(personalMovieDB.count > 30) {
    console.log('много')
} else {
    console.log('err')
}

console.log(personalMovieDB);