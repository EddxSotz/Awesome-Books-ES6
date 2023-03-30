import {addBookClass} from './modules/addBooks.js';
import {displayBooksClass} from './modules/displayBooks.js';

const form = document.getElementById('form');
const bookTitleInput= document.getElementById('bookTitleInput');
const bookAuthorInput= document.getElementById('bookAuthorInput');


const addBooks = new addBookClass(bookTitleInput.value, bookAuthorInput.value);
const displayBooks = new displayBooksClass();

displayBooks.showBooksMethod();

form.addEventListener('submit', () => {
  addBooks.addBookMethod();
  displayBooks.showBooksMethod();
});
