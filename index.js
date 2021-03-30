const libraryItems = document.querySelector('.library-items');
const addBookButton = document.querySelector('.add-book');
const newBookForm = document.querySelector('.new-book-form');
const headers = document.querySelectorAll('th');

libraryItems.addEventListener('click', deleteBook);
libraryItems.addEventListener('click', toggleRead);

addBookButton.addEventListener('click', displayBookForm);
newBookForm.addEventListener('submit', addBook);
headers.forEach((header) => header.addEventListener('click', sortDisplay));

class Book {
  constructor(params) {
    this.title = params.title;
    this.author = params.author;
    this.pages = params.pages;
    this.read = params.read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

let library = [];
const storedLibrary = localStorage.getItem('library');
if (storedLibrary) {
  library = JSON.parse(storedLibrary).map((book) => new Book(book));
}

function addBookToLibrary(book) {
  library.push(book);
  localStorage.setItem('library', JSON.stringify(library));
}

function displayBooks(sortParam = null) {
  libraryItems.innerHTML = library
    .sort((a, b) => (a[sortParam] < b[sortParam] ? -1 : 1))
    .map(
      (book, i) => `
      <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>
        <button class='progress' data-index='${i}'>
          ${
            book.read
              ? "<span class='material-icons'>No</span>"
              : "<span class='material-icons'>Yes</span>"
          }
        </button>
      </td>
      <td><button class='delete' data-index='${i}'>Delete</button></td>
      </tr>`
    )
    .join('');
}

function sortDisplay(e) {
  param = e.target.textContent.toLowerCase().replace('?', '');
  displayBooks(param);
}

function displayBookForm() {
  addBookButton.classList.add('hidden');
  newBookForm.classList.remove('hidden');
}

function hideBookForm() {
  newBookForm.classList.add('hidden');
  addBookButton.classList.remove('hidden');
}

function addBook(e) {
  e.preventDefault();
  book = new Book({
    title: this.querySelector('[name=title]').value,
    author: this.querySelector('[name=author]').value,
    pages: this.querySelector('[name=pages]').value,
    read: this.querySelector('[name=read]').value,
  });
  addBookToLibrary(book);
  hideBookForm();
  displayBooks();
  this.reset();
}

function toggleRead(e) {
  if (!e.target.matches('.progress')) return;
  index = e.target.dataset.index;
  library[index].toggleRead();
  localStorage.setItem('library', JSON.stringify(library));
  displayBooks();
}

function deleteBook(e) {
  if (!e.target.matches('.delete')) return;
  library.splice(e.target.dataset.index, 1);
  localStorage.setItem('library', JSON.stringify(library));
  displayBooks();
}
