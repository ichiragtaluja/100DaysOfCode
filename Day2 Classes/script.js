// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 

// 2. Add ids, titles and authors for your two favourite books. 

// 3. Use the prototype keyword to add a theme property to the  books. 

// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes = []) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.themes = themes;
}

Book.prototype.addTheme = function(newTheme) {
	this.themes = [...this.themes, newTheme];
}

const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");
book1.addTheme("Fantasy");
book2.addTheme("Corruption");





// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres[].

// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

// Beginning:

class Film {
	constructor(id, title, director, releaseYear, genres = []){
		this.id = id,
		this.title = title,
		this. director = director,
		this.releaseYear = releaseYear,
		this.genres = genres
	}
	
	addGenre(genre) {
		this.genres = [...this.genres, genre]
	}
	
	getFilmTitle() {
		return this.title
	}
}


const film1 = new Film(1, "Rockstar", "Imtiaz Ali", 2011)
console.log(film1)


film1.addGenre("Romantic")
console.log(film1)

console.log(film1.getFilmTitle())