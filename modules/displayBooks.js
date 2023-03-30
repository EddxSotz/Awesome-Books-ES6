export class displayBooksClass {
  constructor() {
    this.booksArrayLocalStorage = JSON.parse(localStorage.getItem('BooksList'));
    this.bookList = document.getElementById('bookList');
    this.titleInput = document.getElementById('bookTitleInput');
    this.authorInput = document.getElementById('bookAuthorInput');
  }

  showBooksMethod() {
      this.booksArrayLocalStorage.forEach((element) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `"${element.title}" by ${element.author}`;
      this.bookList.appendChild(bookItem);
    });
  }  

}