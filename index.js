const myLibrary = [];

// a book might have title, author, pages, description
function Book(title,author,pages,description) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.description = description;
  // the constructor...
}


function addBookToLibrary(title, author, pages, description) {
    const newBook = new Book(title,author,pages,description);
    myLibrary.push(newBook);
}

addBookToLibrary("1984", "George Orwell", 328, "Dystopian fiction");

console.log((4 + 6 + 9) / 77);

let book = document.getElementById('book')

// function displayBooks(arr){
//   for(let i =0,)
// }

