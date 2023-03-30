export class addBookClass {
  constructor() {
    this.booksArray = [];
    this.titleInput = document.getElementById('bookTitleInput');
    this.authorInput = document.getElementById('bookAuthorInput');
    if(localStorage.getItem('BooksList')) {
      this.booksArray = JSON.parse(localStorage.getItem('BooksList'));
    }
  }

  addBookMethod() {
      const bookObject = {
        title: this.titleInput.value,
        author: this.authorInput.value,
      };
      this.booksArray.push(bookObject);
      localStorage.setItem('BooksList', JSON.stringify(this.booksArray)); 
  }
}