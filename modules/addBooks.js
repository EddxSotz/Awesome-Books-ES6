export class addBookClass {
  constructor() {
    this.titleInput = document.getElementById('bookTitleInput');
    this.authorInput = document.getElementById('bookAuthorInput');
    //this.booksArray = JSON.parse(localStorage.getItem('BooksList')) || [];    
  }

  addBookMethod(books) {
      this.booksList = books;
      this.bookObject = {
        title: this.titleInput.value,
        author: this.authorInput.value,
      };
      this.booksList.push(this.bookObject);
      localStorage.setItem('BooksList', JSON.stringify(this.booksList)); 
  }  
}