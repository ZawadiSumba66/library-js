const title = document.getElementById('title');

const author = document.getElementById('author');

const pages = document.getElementById('pages');

const button_read = document.querySelector('.button-read');

const add_book = document.querySelector('.add-book');

const table_body = document.querySelector('.table-body')




let myLibrary = [];
let newBook


function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

add_book.addEventListener("click",addBookToLibrary)
function showcaseBooks(book) {
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

// const book = [];
// book[1] = Book({
//   title: 'Harry Potter',
//   author: 'Mark Donald',
//   pages: 300,
//   read: true
// });

// book[2] = Book({
//   title: 'The River and The Source',
//   author: 'Margaret Ogolla',
//   pages: '500',
//   read: true
// });

// book[3] = Book({
//   title: 'Damu Nyeusi',
//   author: 'Ken Walibora',
//   pages: '700',
//   read: false
// }); 

function updateBooks() {
  myLibrary.forEach(({book})=> showcaseBooks(book))
}

function addBookToLibrary(){
    if(myLibrary.some(({book})=> book.title === title.value))
    return;
    const book = new Book(title.value,author.value,pages.value)

    myLibrary.push({book})
    updateBooks();
}
