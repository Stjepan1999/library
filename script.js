const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    library.push(newBook)
}


function showBooks() {
    bookContainer.innerHTML = ""
    for (let i = 0; i < library.length; i++) {
        let bookDiv = document.createElement("div")
        bookDiv.classList.add("book-div")
        let titleDiv = document.createElement("div")
        titleDiv.textContent = library[i].title
        let authorDiv = document.createElement("div")
        authorDiv.textContent = library[i].author
        let pagesDiv = document.createElement("div")
        pagesDiv.textContent = library[i].pages
        let statusDiv = document.createElement("div")
        statusDiv.textContent = library[i].read
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "DELETE BOOK"

        bookContainer.appendChild(bookDiv)
        bookDiv.appendChild(titleDiv)
        bookDiv.appendChild(authorDiv)
        bookDiv.appendChild(pagesDiv)
        bookDiv.appendChild(statusDiv)
        bookDiv.appendChild(deleteButton)
    }
}

let bookContainer = document.querySelector(".books-container")
let bookDiv = document.createElement("div")
bookDiv.classList.add("book-div")


let firstBook = new Book("First book", "First author", 699, "true")
let secondBook = new Book("Second book", "Second author", 699, "true")

let addBookButton = document.getElementById("add-button")

let bookShowed = null;


addBookButton.addEventListener('click', () => {
    let title = document.querySelector("[name='book-title']").value
    let author = document.querySelector("[name='book-author']").value
    let pages = document.querySelector("[name='book-pages']").value
    let read = document.querySelector("[name='read-book']").value

    addBookToLibrary(title, author, pages, read)
    showBooks()

    title.value = " "
    author.value = " "
    pages.value = " "

    }
    )

let deleteAllButton = document.querySelector("#delete-all-button")

deleteAllButton.addEventListener("click", () => {
    library = []
    showBooks()
})


showBooks()
