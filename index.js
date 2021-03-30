const title = document.getElementById('title');

const author = document.getElementById('author');

const pages = document.getElementById('pages');

const button_read = document.querySelector('.button-read');

const add_book = document.querySelector('.add-book');

const table_body = document.querySelector('.table-body')

const checkRead = document.querySelector("#read")


let myLibrary = [];
const storedLibrary = localStorage.getItem('myLibrary');
if(storedLibrary) {
  myLibrary = JSON.parse(storedLibrary).map((book) => new Book(book));
}

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

  const cell_4 = document.createElement('td')
  const readButton = document.createElement('button')
  readButton.addEventListener("click",changeRead)

  book.read ? readButton.textContent = 'read' : readButton.textContent = 'unread';
    cell_4.appendChild(readButton)
    row.appendChild(cell_4);

    // const deleteButton=document.createElement('button');
    // deleteButton.innerHTML='Delete';
    // deleteButton.style.color='red';
    // row.appendChild(deleteButton);
    // deleteButton.classList.add("delete")
    // deleteButton.addEventListener('click', deleteBook);
  table_body.appendChild(row)
  }

// function deleteBook(e) {
//   if (!e.target.matches('.delete')) return;
//   myLibrary.splice(e.target.dataset.index, 1);
//   localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
//   showcaseBooks();
// }




function updateBooks() {
    table_body.innerHTML=""
  myLibrary.forEach(({book})=> showcaseBooks(book))
}

function addBookToLibrary(book){
    // if(myLibrary.some(({book})=> book.title === title.value))
    // return;
    // const book = new Book(title.value,author.value,pages.value,checkRead.checked)

    myLibrary.push(book)
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    updateBooks();
    title.value="";
    author.value="";
    pages.value="";
    checkRead.checked="";
}

function changeRead() {
  const bookIndex = myLibrary[index];
  bookIndex.read = !bookIndex.read;
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  updateBooks();
}


