/**
 * Fnu Aburfay 
 * Homework 3 – Objects and exception handling in JS
 */

console.log("\n ----Homework 3----")
class Movie {
    constructor(title, director, year) {
        this.t = title
        this.d = director
        this.y = year
    }
    getDetails(){
        return this.t +" directed by " + this.d + " released in " + this.y

    }
}

class MovieCollection{
    constructor(){
        this.movies = []
    }
    addMovie(movie){
        this.movies.push(movie)
    }
    removeMovie(title) {
        const index = this.movies.findIndex(movie => movie.t === title);

        if (index === -1) {
            throw new Error("Movie not found");
        }

        this.movies.splice(index, 1);
    }

    showMovies() {
        if (this.movies.length === 0) {
            throw new Error("No movies in collection");
        }

        this.movies.forEach(movie => {
            console.log(movie.getDetails());
        });
    }
}

const collection = new MovieCollection();

const movie1 = new Movie("The Karate Kid", "Harald Zwart", 2010);

collection.addMovie(movie1);

try {
    collection.showMovies();
} catch (error) {
    console.log(error.message);
}
try {
    collection.removeMovie("Inception");
} catch (error) {
    console.log(error.message);
}

try {
    collection.removeMovie("The Karate Kid");
} catch (error) {
    console.log(error.message);
}

try {
    collection.showMovies();
} catch (error) {
    console.log(error.message);
}