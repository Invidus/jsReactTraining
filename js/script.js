"use strict"

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените?'),
      c = prompt('Один из последних просмотренных фильмов?'),
      d = prompt('На сколько оцените?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);