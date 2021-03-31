const title = document.getElementById('title');

const author = document.getElementById('author');

const pages = document.getElementById('pages');

const addBook = document.querySelector('.add-book');

const tableBody = document.querySelector('.table-body');

const checkRead = document.querySelector('#read');


let library = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function showcaseBooks(book, index) {
  const row = document.createElement('tr');
  const cellOne = document.createElement('td');
  cellOne.textContent = book.title;
  row.appendChild(cellOne);

  const cellTwo = document.createElement('td');
  cellTwo.textContent = book.author;
  row.appendChild(cellTwo);

  const cellThree = document.createElement('td');
  cellThree.textContent = book.pages;
  row.appendChild(cellThree);

  const cellFour = document.createElement('td');
  const readButton = document.createElement('button');
  readButton.setAttribute('data-index', index);
  readButton.classList.add('read-check');

  readButton.textContent = book.read ? 'read' : 'unread';
  cellFour.appendChild(readButton);
  row.appendChild(cellFour);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  row.appendChild(deleteButton);
  deleteButton.classList.add('delete');
  tableBody.appendChild(row);
  /* eslint-disable no-use-before-define */
  deleteButton.addEventListener('click', deleteBook);
  readButton.addEventListener('click', checkBox);
  /* eslint-enable no-use-before-define */
}
/* eslint-disable no-use-before-define */
// function deleteBook(e) {
//   if (!e.target.matches('.delete')) return;
//   library.splice(e.target.dataset.index, 1);
//   // localStorage.setItem('library', JSON.stringify(library));
//   updateBooks();
// }
/* eslint-enable no-use-before-define */
function updateBooks() {
  tableBody.innerHTML = '';
  library.forEach(( book, index ) => showcaseBooks(book, index));
}

function addBookToLibrary(e) {
  e.preventDefault()
  const book = new Book(title.value, author.value, pages.value, checkRead.checked);
  if (library.some((book ) => book.title === title.value)) { return; }


  library.push( book );
  title.value = '';
  author.value = '';
  pages.value = '';
  checkRead.checked = '';

  updateBooks();
}

function checkBox(e) {
  const item = e.target;
  const bookIndex = item.getAttribute('data-index');
  const bookToggle = library[bookIndex];
  bookToggle.read = !bookToggle.read;

  updateBooks();
}

