//import { booksArray } from "./displayBooks";

export class addBookClass {
  constructor(title, author) {
    this.booksArray = [];
    localStorage.setItem('BooksList', JSON.stringify(this.booksArray));
    this.bookTitle = title; 
    this.bookAuthor = author; 
  }

  addBookMethod() {
      const bookObject = {
      title: this.bookTitle,
      author: this.bookAuthor,
    };
    this.booksArray.push(bookObject);
    localStorage.setItem('BooksList', JSON.stringify(this.booksArray));    
  }
}