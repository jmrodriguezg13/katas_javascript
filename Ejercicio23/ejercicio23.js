//Ejercicio 23
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else {
    largeMovies.push(movie);
  }
}

console.log("Películas pequeñas (menos de 100 minutos):");
console.log(smallMovies);

console.log("\nPelículas medianas (entre 100 y 200 minutos):");
console.log(mediumMovies);

console.log("\nPelículas grandes (más de 200 minutos):");
console.log(largeMovies);



