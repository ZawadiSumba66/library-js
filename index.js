let title = document.getElementById('title');

let author = document.getElementById('author');

let pages = document.getElementById('pages');

let button_read = document.getElementByClassName('button-read');

let add_book = document.getElementByClassName('add-book');

let table_body = document.querySelector('.table-body')




let myLibrary = [];
let newBook
let myLibrary

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

add_book.addEventListener("click",addBookToLibrary)
function addBookToLibrary() {
  const row = document.createElement('tr')
  const cell_1 = document.createElement('td')
  cell_1.appendChild(book.title)
  row.appendChild(cell_1)

  
}