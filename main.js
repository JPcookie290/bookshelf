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

let books = [];

let check = document.querySelector('#warning')

let showForm = false;
let bookMarked = false;
let bookIndex = 0;

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = "Pages: " + pages;
    this.read = read;
}

function addBooks(id, title, author, pages, read) {

    let newBook = new Book(id, title, author, pages, read);
    books.push(newBook);
    addToShelf(newBook);

    console.log(books);

    if (showForm === true) {
        showForm = false;
        form.classList.add("hidden");
    }
    bookIndex += 1;
};

function addToShelf(newBook) {
    let bookAdd = document.createElement('div');
    bookAdd.innerHTML = `
            <div class="book" id="book" data-id="bookIndex">
                <h3 class="title">${newBook.title}</h3>
                <p class="author">${newBook.author}</p>
                <p class="pages">${newBook.pages}</p>
                <span>
                    <div class="bookRead"><i class="fa-solid fa-book-open"></i></div>
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
    checkInput(bookIndex, title, author, pages);
}

function checkInput(id, title, author, pages) {
    if (title === "" || author == "" || pages == "") {
        check.textContent = "Required input is missing or wrong!"
    } else {
        addBooks(id, title, author, pages);
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

bookshelf.addEventListener('click', (e) => {
    let currentTraget = e.target;
    if (currentTraget.matches('.fa-book-open')) {
        console.log(currentTraget);
    }
})

bookshelf.addEventListener('click', (e) => {
    let currentTraget = e.target;
    if (currentTraget.matches('.fa-square-minus')) {
        console.log(currentTraget);

    }
})



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
