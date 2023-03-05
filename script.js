function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read) {
        this.read = 'read';
    } else {
        this.read = 'not read yet';
    }
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary() {
    const title = prompt('Enter book title: ');
    const author = prompt('Enter book author: ');
    const pages = prompt('Enter number of pages: ');
    const readCheck = prompt('Have you read this book? (y/n): ');
    if (readCheck === 'y') {
        const read = true;
    } else {
        const read = false;
    }

    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div').classList.add('card');
        const title = document.createElement('h3').classList.add('title');
        const author = document.createElement('p').classList.add('author');
        const pages = document.createElement('p').classList.add('pages');
        const read = document.createElement('p').classList.add('read');
        
    }
}

let myLibrary = [];
myLibrary.push(new Book('Beyond Good and Evil', 'Friedrich Nietzsche', 217, true));
myLibrary.push(new Book('Animal Farm', 'George Orwell', 392, false));