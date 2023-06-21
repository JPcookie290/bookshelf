"use strict";

const bookshelf = document.querySelector('#bookshelf')
const addBtn = document.querySelector('#add-button')
const form = document.querySelector('#form')
const cancel = document.querySelector('#cancel')
const addBook = document.querySelector('#add')
let check = document.querySelector('#warning')

let showForm = false;

let books = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = "Pages: " + pages;
    this.read = "";
}

function addBooks(title, author, pages) {
    let newBook = new Book(title, author, pages);
    books.push(newBook);
    //addToShelf(newBook);
    console.log(books);
    showForm = false;
    form.classList.add("hidden")
};

function getData() {
    let title = document.querySelector('#title');
    title = title.value;
    let author = document.querySelector('#author');
    author = author.value;
    let pages = document.querySelector('#pages');
    pages = pages.value;
    checkInput(title, author, pages);
};
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

function addToShelf(book) {
    let bookAdd = document.createElement('div');
    bookAdd.classList.add("book");

    let bookTitle = document.createElement('h3');
    bookTitle.classList.add("ue");
    bookTitle.textContent = book.title;
    console.log(book.title);

    let bookAuthor = document.createElement('p');
    bookAuthor.classList.add("tx");
    bookAuthor.textContent = book.author;
    console.log(book.author);

    let bookPages = document.createElement('p');
    bookPages.classList.add("tx");
    bookPages.textContent = book.pages;
    console.log(book.pages);
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
