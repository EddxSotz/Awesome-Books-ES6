import AddBookClass from './modules/addBooks.js';
import DisplayBooksClass from './modules/displayBooks.js';
import RemoveBook from './modules/removeBook.js';
import { DateTime } from './modules/luxon.min.js';

const form = document.getElementById('form');
const booksList = document.getElementById('bookList');
const booksContainer = document.getElementById('books');
const addBooksContainer = document.getElementById('addBook');
const contactContainer = document.getElementById('contact');
const bookListNavLink = document.getElementById('booksLink');
const bookAddNavLink = document.getElementById('addBookLink');
const contactNavLink = document.getElementById('contactLink');
const displayDate = document.querySelector('.displayDate');

const addBooks = new AddBookClass();
const displayBooks = new DisplayBooksClass();
const removeBookItem = new RemoveBook();

let booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];

// display books upon page load
displayBooks.showBooksMethod(booksSaved);

// display current date
setInterval(() => {
  displayDate.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}, 1000);

// add book action
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBooks.addBookMethod(booksSaved);
  booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];
  displayBooks.showBooksMethod(booksSaved);
});

// remove button action
booksList.addEventListener('click', (element) => {
  if (element.target.matches('.removeButton')) {
    const { index } = element.target.dataset;
    removeBookItem.removeBook(booksSaved, index);
    booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];
    displayBooks.showBooksMethod(booksSaved);
  }
});

bookListNavLink.addEventListener('click', () => {
  booksContainer.setAttribute('style', 'display: contents');
  addBooksContainer.setAttribute('style', 'display:none');
  contactContainer.setAttribute('style', 'display: none');
});

bookAddNavLink.addEventListener('click', () => {
  addBooksContainer.setAttribute('style', 'display: contents');
  booksContainer.setAttribute('style', 'display: none');
  contactContainer.setAttribute('style', 'display: none');
});

contactNavLink.addEventListener('click', () => {
  contactContainer.setAttribute('style', 'display: contents');
  addBooksContainer.setAttribute('style', 'display:none');
  booksContainer.setAttribute('style', 'display: none');
});