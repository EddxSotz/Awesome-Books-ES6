import {addBookClass} from './modules/addBooks.js';
import {displayBooksClass} from './modules/displayBooks.js';
import { removeBook } from './modules/removeBook.js';

const form = document.getElementById('form');
const booksList = document.getElementById('bookList');
const childElements = booksList.children;

const addBooks = new addBookClass();
const displayBooks = new displayBooksClass();
const removeBookItem = new removeBook();

let booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];  


displayBooks.showBooksMethod(booksSaved);

//add book action
form.addEventListener('submit', (event) => {
  event.preventDefault();  
  addBooks.addBookMethod(booksSaved);
  booksSaved = localStorage.getItem('BooksList');
  displayBooks.showBooksMethod(booksSaved);
});


//remove button action
for(let i=0; i<childElements.length; i+=1){  
  //console.log(childElements[i].firstChild.matches(".button"));
  let element =  childElements[i].lastElementChild;
  //console.log(element);
  if(element.matches(".removeButton")){
    element.addEventListener('click', () => {  
      console.log("Remove Button Index: "+i);
      removeBookItem.removeBook(booksSaved, i);
      booksSaved = localStorage.getItem('BooksList');
      displayBooks.showBooksMethod(booksSaved);
  });
};  
}

