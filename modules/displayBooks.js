export class displayBooksClass {
  constructor() {
    //this.booksArrayLocalStorage = [];
    //if(localStorage.getItem('BooksList')) {
      //this.booksArrayLocalStorage = JSON.parse(localStorage.getItem('BooksList'));
    //}    
    this.bookList = document.getElementById('bookList');
    this.titleInput = document.getElementById('bookTitleInput');
    this.authorInput = document.getElementById('bookAuthorInput');
  }

  showBooksMethod(books) {
      //const booksList = Object.keys(books);
            
      books.forEach(element => {
      const bookItem = document.createElement('li');
      const removeButton = document.createElement('button');

      bookItem.innerHTML = `"${element.title}" by ${element.author}`;
      removeButton.textContent = "Remove Book";
      removeButton.className = "removeButton"
      
      bookItem.appendChild(removeButton);
      this.bookList.appendChild(bookItem);

    });
    
  }

}