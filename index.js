let myLibrary = [];

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
    console.log("📚 Book added:", newBook);
    console.log("📚 Current library:", myLibrary);
}



const container = document.getElementById("card-container");
function render(){
  container.innerHTML = "";
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

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary=myLibrary.filter(b => b.id !== book.id);
      render();
    });

    const stateBtn = document.createElement("button")
    deleteBtn.textContent = "";

    card.appendChild(deleteBtn);
    container.appendChild(card);
    });
}
  


//when user clicks add book, a new form opens that user can type in 
//attributes 
const dialog = document.querySelector("dialog")
const closeBtn = document.getElementById('closeBtn')
const addBookBtn = document.getElementById('addBookBtn')
const form = document.getElementById("dialogForm");

const authorEl = document.getElementById("authorEl")
const titleEl = document.getElementById("titleEl")
const pagesEl = document.getElementById("pagesEl")
const descriptionEl = document.getElementById("descriptionEl")

addBookBtn.addEventListener("click", () =>{
  dialog.showModal();
});
closeBtn.addEventListener("click", () =>{
  dialog.close();
});
form.addEventListener("submit", (e) =>{
  e.preventDefault();
  let author = authorEl.value;
  let title = titleEl.value;
  let pages = pagesEl.value;
  let description = descriptionEl.value;
  addBookToLibrary(title, author, pages, description)
  render()
  dialog.close();
})
