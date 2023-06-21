"use strict";


const addBtn = document.querySelector('#add-button')
const form = document.querySelector('#form')
const cancel = document.querySelector('#cancel')
const addBook = document.querySelector('#add')
let check = document.querySelector('#warning')

let showForm = false;

let books = [];

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = "Pages: " + pages;
    this.read = "";
}

function addBooks(title, author, pages) {
    let bookshelf = document.querySelector('#bookshelf')
    let newBook = new book(title, author, pages);
    books.push(newBook);
    console.log(books);
    /*  
    books.forEach(newBook => {
        let bookAdd = document.createElement('div');
            bookAdd.innerHTML = `
            <div class="book" id="book">
                <h3 class="ue">${newBook.title}</h3>
                <p class="tx">${newBook.author}</p>
                <p class="tx">${newBook.pages}</p>
                <span>
                    <i class="fa-solid fa-book-open"></i>
                    <i class="fa-solid fa-square-minus"></i>
                </span>
            </div>`;
            bookshelf.appendChild(newBook);
        });
    if (showForm === true) {
        showForm = false;
        form.classList.add("hidden"); 
    }
    */
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
