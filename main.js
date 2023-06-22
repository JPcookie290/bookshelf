"use strict";

const addBtn = document.querySelector('#add-button')
const form = document.querySelector('#form')
const cancel = document.querySelector('#cancel')
const addBook = document.querySelector('#add')

const bookshelf = document.querySelector('.container')
const titleBs = document.querySelector('.title')
const authorBs = document.querySelector('.author')
const pagesBs = document.querySelector('.pages')
const bookRead = document.querySelector('.bookRead')
const deleteBook = document.querySelector('.deleteBook')

let check = document.querySelector('#warning')

let showForm = false;
let bookMarked = false;

let books = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = "Pages: " + pages;
    this.read = false;
}

function addBooks(title, author, pages) {

    let newBook = new Book(title, author, pages);
    books.push(newBook);
    console.log(books);
    
    addToShelf(newBook);

    /*  */
    if (showForm === true) {
        showForm = false;
        form.classList.add("hidden"); 
    }
    
};

function addToShelf(newBook) {
    let bookAdd = document.createElement('div');
    bookAdd.innerHTML = `
            <div class="book" id="book">
                <h3 class="title">${newBook.title}</h3>
                <p class="author">${newBook.author}</p>
                <p class="pages">${newBook.pages}</p>
                <span>
                    <div class="bookRead readCheck"><i class="fa-solid fa-book-open"></i></div>
                    <div class="deleteBook"><i class="fa-solid fa-square-minus"></i></div>
                </span>
            </div>`;
    bookshelf.appendChild(bookAdd);
};


function getData() {
    let title = document.querySelector('#title');
    title = title.value;
    let author = document.querySelector('#author');
    author = author.value;
    let pages = document.querySelector('#pages');
    pages = pages.value;
    checkInput(title, author, pages);
}

function checkInput(title, author, pages) {
    if (title === "" || author == "" || pages == "") {
        check.textContent = "Required input is missing or wrong!"
    } else {
        addBooks(title, author, pages);
        clear();
    }
}
function clear() {
    title.value = "";
    author.value = "";
    pages.value = "";
    check.textContent = "";
}

/*  Buttons */

addBtn.addEventListener('click', () => {
    //console.log(showForm);
    if (showForm === false) {
        showForm = true;
        form.classList.remove("hidden");
    } else if (showForm === true) {
        //console.log(showForm);
        if (showForm === true) {
            showForm = false;
            form.classList.add("hidden");
            clear();
        }
    }
})

cancel.addEventListener('click', () => {
    //console.log(showForm);
    if (showForm === true) {
        showForm = false;
        form.classList.add("hidden");
    }
    clear();
})

addBook.addEventListener('click', getData);
