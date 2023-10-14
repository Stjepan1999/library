const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = prompt("Book title: ");
    let author = prompt("Book author: ")
    let pages = prompt("Pages: ")
    let read = prompt("Have you read it?")

    let newBook = new Book(title, author, pages, read)
    library.push(newBook)
}




