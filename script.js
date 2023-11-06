class Book {
    static library = [];

    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    static addBookToLibrary() {
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
    
    static showBooks() {
        bookContainer.innerHTML = ""
    
        // Info section about book list
        let totalBooks = this.library.length;
        let booksRead = 0;
        let booksUnread = 0;
    
        for (let i = 0; i < this.library.length; i++) {
            let bookDiv = document.createElement("div")
            bookDiv.classList.add("book-div")
            let titleDiv = document.createElement("div")
            titleDiv.textContent = this.library[i].title
            let authorDiv = document.createElement("div")
            authorDiv.textContent = this.library[i].author
            let pagesDiv = document.createElement("div")
            pagesDiv.textContent = this.library[i].pages
    
            // SVG button for status
            let statusButton = document.createElement("button")
            statusButton.style.background = "var(--sidebar-color)"
            statusButton.style.border = "none";
            
            let icon = document.createElement("img")
    
            if (this.library[i].status === "yes") {
                icon.src = "./images/check-mark-icon.svg"
            } else {
                icon.src ="./images/x-symbol.svg"
            }
    
            icon.classList.add("status-button")
            statusButton.appendChild(icon)
    
            statusButton.addEventListener('click', () => {
                if (this.library[i].status === "yes") {
                    this.library[i].status = "no";
                    icon.src ="./images/x-symbol.svg"
                } else {
                    this.library[i].status = "yes";
                    icon.src = "./images/check-mark-icon.svg"
                }
    
                // Refreshing list to update status
                this.showBooks()
            })
            
    
            // Delete button for each book
            let deleteButton = document.createElement("button")
            deleteButton.style.background = "var(--sidebar-color)"
            deleteButton.style.border = "none";
    
            let deleteIcon = document.createElement("img")
            deleteIcon.src = "./images/trash-can.svg"
            deleteIcon.classList.add("status-button")
            deleteButton.appendChild(deleteIcon)
    
            //deleteButton.classList.add("delete-button")
            //deleteButton.textContent = "DELETE BOOK"
    
    
            deleteButton.addEventListener('click', () => deleteBook(i))
    
            // Creating book divs for each book in list
            bookContainer.appendChild(bookDiv)
            bookDiv.appendChild(titleDiv)
            bookDiv.appendChild(authorDiv)
            bookDiv.appendChild(pagesDiv)
            bookDiv.appendChild(statusButton)
            bookDiv.appendChild(deleteButton)
    
            //Count books
            if (this.library[i].status === "yes") {
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
    static changeStatus(bookIndex) {
        if (this.library[bookIndex].status === "yes") {
            this.library[bookIndex].status = "no";
            icon.src ="./images/x-symbol.svg"
        } 
    }

    // Delete each book on button
    static deleteBook(bookIndex) {
        library.splice(bookIndex, 1);
        showBooks()
    } 
}



// Creating first book object for testing and pushing it to library array
let atomicHabits = new Book("Atomic Habits", "James Clear", 320, "yes")
let cantHurtMe = new Book("Influence", "Robert B. Cialdini", 292, "no")
Book.library.push(atomicHabits)
Book.library.push(cantHurtMe)


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
Book.showBooks()
