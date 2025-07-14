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
addBookToLibrary("1984", "George Orwell", 328, "Dystopian fiction");

// let book = document.getElementById('book')

// function displayBooks(){
//   for(let i =0;i<myLibrary.length;i++){
//     book.textContent+=JSON.stringify(myLibrary[i]) 
//   }
// }
// displayBooks()

 const container = document.getElementById("card-container");

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.style.padding = "16px";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    card.style.width = "150px";

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.description}</p>
    `;

    container.appendChild(card);
  });
