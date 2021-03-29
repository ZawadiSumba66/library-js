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
  cell_1.textContent = book.title
  row.appendChild(cell_1)

  const cell_2 = document.createElement('td')
  cell_2.textContent = book.author
  row.appendChild(cell_2);


  const cell_3 = document.createElement('td')
  cell_3.textContent = book.pages
  row.appendChild(cell_3);

  table_body.appendChild(row)
}

const book = [];
book[1] = Book({
  title: 'Harry Potter',
  author: 'Mark Donald',
  pages: 300,
  read: true
});

book[2] = Book({
  title: 'The River and The Source',
  author: 'Margaret Ogolla',
  pages: '500',
  read: true
});

book[3] = Book({
  title: 'Damu Nyeusi',
  author: 'Ken Walibora',
  pages: '700',
  read: false
}); 

function updateBooks() {
  myLibrary.forEach(({
    book
  } => {
    
  }))
}


