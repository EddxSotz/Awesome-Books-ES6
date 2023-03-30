
//export let booksArray = [];

export class displayBooksClass {
  constructor() {
    this.booksArrayLocalStorage = JSON.parse(localStorage.getItem('BooksList'));
    this.bookList = document.getElementById('bookList');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
  }

  showBooksMethod() {
      this.booksArrayLocalStorage.forEach((element) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `"${element.title}" by ${element.author}`;
      this.bookList.appendChild(bookItem);
    });
  }  

}