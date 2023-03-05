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

function addBookToLibrary() {
  const title = prompt("Enter book title: ");
  const author = prompt("Enter book author: ");
  const pages = prompt("Enter number of pages: ");
  const readCheck = prompt("Have you read this book? (y/n): ");
  let read;
  if (readCheck === "y") {
    read = true;
  } else {
    read = false;
  }

  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
  const main = document.querySelector(".main");
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

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

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    main.appendChild(card);
  }
}

let myLibrary = [];
myLibrary.push(
  new Book("Beyond Good and Evil", "Friedrich Nietzsche", 217, true)
);
myLibrary.push(new Book("Animal Farm", "George Orwell", 392, false));

displayBooks();

const newBookBtn = document.querySelector(".newBook");
