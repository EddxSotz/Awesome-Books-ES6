import {addBookClass} from './modules/addBooks.js';
import {displayBooksClass} from './modules/displayBooks.js';
import { removeBook } from './modules/removeBook.js';

const form = document.getElementById('form');
const booksList = document.getElementById('bookList');

const addBooks = new addBookClass();
const displayBooks = new displayBooksClass();
const removeBookItem = new removeBook();

let booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];  

//display books upon page load
displayBooks.showBooksMethod(booksSaved);

//add book action
form.addEventListener('submit', (event) => {
  event.preventDefault();  
  addBooks.addBookMethod(booksSaved);
  booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];
  displayBooks.showBooksMethod(booksSaved);
});


//remove button action
booksList.addEventListener('click', (element) => {
  if(element.target.matches(".removeButton")){
    let index = element.target.dataset.index;
    removeBookItem.removeBook(booksSaved, index);
    booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];
    displayBooks.showBooksMethod(booksSaved);
  }
})

