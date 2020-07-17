'use strict';

//024

let numberOfFilms;

// start()
function start() {

    numberOfFilms = +prompt('How much movies are you watching?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much movies are you watching?', '');
    }

}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gentres: [],
    privat: false
};

// rememberMyFilms()
function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {

        let movie = prompt('Last movie', '');
        let imdb = prompt('IMDB', '');

        if(movie && (movie.length < 50) && imdb) {
            personalMovieDB.movies[movie] = imdb;
        } else {
            alert('Please, enter correct data');
            i--;
        }

    }

}
rememberMyFilms();

// detectPersonalLevel()
function detectPersonalLevel() {

    if(personalMovieDB.count <= 10) {
        console.log('мало')
    } else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30 ) {
        console.log('норм')
    } else if(personalMovieDB.count > 30) {
        console.log('много')
    } else {
        console.log('err')
    }

}
detectPersonalLevel();


// showMyDB()
function showMyDB() {

    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }

}
showMyDB();

// writeYourGentres()

let gentre;

function writeYourGentres() {

    for (let i = 1; i <=3; i++) {

        gentre = prompt(`You favorite gentres number ${i}`);

        if(gentre || gentre !== '' || gentre !== null) {
            personalMovieDB.gentres[i - 1] = gentre;
        } else {
            alert('Please, enter correct data');
            i--;
        }

    }

}
writeYourGentres();