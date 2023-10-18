let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

    let title = document.querySelector("[name='book-title']")
    let author = document.querySelector("[name='book-author']")
    let pages = document.querySelector("[name='book-pages']")
    let status = document.querySelector("[name='book-status']")

    if (status.checked) {
        status.value = "I read it"
    } else {
        status.value = "I haven't read it"
    }

    if (title.value && author.value && pages.value) {
        let newBook = new Book(title.value, author.value, pages.value, status.value)
        library.push(newBook);

        title.value = ""
        author.value = ""
        pages.value = ""
        status.checked = false

        showBooks()
    }
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
        deleteButton.addEventListener('click', () => deleteBook(i))

        bookContainer.appendChild(bookDiv)
        bookDiv.appendChild(titleDiv)
        bookDiv.appendChild(authorDiv)
        bookDiv.appendChild(pagesDiv)
        bookDiv.appendChild(statusDiv)
        bookDiv.appendChild(deleteButton)
    }
}

function deleteBook(bookIndex) {
    library.splice(bookIndex, 1);
    showBooks()
} 


let bookContainer = document.querySelector(".books-container")
let bookDiv = document.createElement("div")
bookDiv.classList.add("book-div")

let addBookButton = document.getElementById("add-button")
addBookButton.addEventListener('click', () => addBookToLibrary())


let deleteAllButton = document.querySelector(".delete-all-button")
deleteAllButton.addEventListener("click", () => {
    library = [];
    showBooks();
})



showBooks()
