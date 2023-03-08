function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read) {
    this.read = "read";
  } else {
    this.read = "not read yet";
  }
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  let read;
  const selection = document.querySelector('input[name="readStatus"]:checked');
  if (selection === null) {
    read = false;
  } else if (selection.id === 'read') {
    read = true;
  } else {
    read = false;
  }

  myLibrary.push(new Book(title, author, pages, read));
  displayBooks();
  closeForm();
  e.preventDefault();
}

function displayBooks() {
  const main = document.querySelector(".main");
  main.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = i;

    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = myLibrary[i].title;

    const author = document.createElement("p");
    author.classList.add("author");
    author.innerText = "by " + myLibrary[i].author;

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.innerText = myLibrary[i].pages + " pages";

    const read = document.createElement("p");
    read.classList.add("read");
    read.innerText = myLibrary[i].read;

    const delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    delBtn.innerText = 'Delete Book';
    delBtn.dataset.index = i;

    delBtn.addEventListener('click', removeBook);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(delBtn);

    main.appendChild(card);
  }
}

function removeBook(e) {
  const index = this.dataset.index;
  const main = document.querySelector('.main');
  const card = document.querySelector(`div[data-index='${index}']`);
  main.removeChild(card);
  myLibrary.pop(index);
}

function openForm() {
    document.getElementById('form-popup').style.display = 'flex';
}

function closeForm() {
    document.getElementById('form-popup').style.display = 'none';
    document.querySelector('.form-container').reset();
}

let myLibrary = [];
myLibrary.push(
  new Book("Beyond Good and Evil", "Friedrich Nietzsche", 217, true)
);
myLibrary.push(new Book("Animal Farm", "George Orwell", 392, false));

displayBooks();

const formSubmitBtn = document.querySelector('.form-submitBtn');
formSubmitBtn.addEventListener('click', addBookToLibrary);