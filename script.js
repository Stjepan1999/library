let library = []; // Array for storing book objects

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// Creating first book object for testing and pushing it to library array
let atomicHabits = new Book("Atomic Habits", "James Clear", 243, "yes")
let cantHurtMe = new Book("Can't hurt me", "David Goggings", 276, "no")
library.push(atomicHabits)
library.push(cantHurtMe)


function addBookToLibrary() {
    let title = document.querySelector("[name='book-title']")
    let author = document.querySelector("[name='book-author']")
    let pages = document.querySelector("[name='book-pages']")
    let status = document.querySelector("[name='book-status']")

    // yes = read it, no = haven't read it
    if (status.checked) {
        status.value = "yes"
    } else {
        status.value = "no"
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

    // Info section about book list
    let totalBooks = library.length;
    let booksRead = 0;
    let booksUnread = 0;

    for (let i = 0; i < library.length; i++) {
        let bookDiv = document.createElement("div")
        bookDiv.classList.add("book-div")
        let titleDiv = document.createElement("div")
        titleDiv.textContent = library[i].title
        let authorDiv = document.createElement("div")
        authorDiv.textContent = library[i].author
        let pagesDiv = document.createElement("div")
        pagesDiv.textContent = library[i].pages

        // SVG button for status
        let statusDiv = document.createElement("button")
        statusDiv.style.background = "var(--sidebar-color)"
        statusDiv.style.border = "none";
        
        let icon = document.createElement("img")

        if (library[i].status === "yes") {
            icon.src = "./images/check-mark-icon.svg"
            icon.style.fill = "#ff0000"
        } else {
            icon.src ="./images/x-symbol.svg"
        }

        icon.classList.add("status-button")
        statusDiv.appendChild(icon)

        statusDiv.addEventListener('click', () => {
            if (library[i].status === "yes") {
                library[i].status = "no";
                icon.src ="./images/x-symbol.svg"
            } else {
                library[i].status = "yes";
                icon.src = "./images/check-mark-icon.svg"
            }

            showBooks()
        })
        

        // Delete button for each book
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "DELETE BOOK"
        deleteButton.addEventListener('click', () => deleteBook(i))

        // Creating book divs for each book in list
        bookContainer.appendChild(bookDiv)
        bookDiv.appendChild(titleDiv)
        bookDiv.appendChild(authorDiv)
        bookDiv.appendChild(pagesDiv)
        bookDiv.appendChild(statusDiv)
        bookDiv.appendChild(deleteButton)

        //Count books
        if (library[i].status === "yes") {
            booksRead += 1
        } else {
            booksUnread += 1
        }
    }

    // Updating info about books in list
    booksReadDiv.textContent = booksRead;
    booksUnreadDiv.textContent = booksUnread;
    totalBooksDiv.textContent = totalBooks;
    booksReadContainer.appendChild(booksReadDiv)
    booksUnreadContainer.appendChild(booksUnreadDiv)
    totalBooksContainer.appendChild(totalBooksDiv)
}

// Change status for each book
function changeStatus(bookIndex) {
    if (library[bookIndex].status === "yes") {
        library[bookIndex].status = "no";
        icon.src ="./images/x-symbol.svg"
    } 
}


// Delete each book on button
function deleteBook(bookIndex) {
    library.splice(bookIndex, 1);
    showBooks()
} 



// Adding class to books list divs
let bookContainer = document.querySelector(".books-container")
let bookDiv = document.createElement("div")
bookDiv.classList.add("book-div")


// Elements for info section above header
let booksReadContainer = document.querySelector(".books-read");
let booksUnreadContainer = document.querySelector(".books-unread");
let totalBooksContainer = document.querySelector(".total-books")

let booksReadDiv = document.createElement("div")
let booksUnreadDiv = document.createElement("div")
let totalBooksDiv = document.createElement("div")


// Add book button
let addBookButton = document.getElementById("add-button")
addBookButton.addEventListener('click', () => addBookToLibrary())

// Delete all button
let deleteAllButton = document.querySelector(".delete-all-button")
deleteAllButton.addEventListener("click", () => {
    library = [];
    showBooks();
})


// Showing book list at start
showBooks()
