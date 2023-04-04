export default class DisplayBooksClass {
  constructor() {
    this.bookList = document.getElementById('bookList');
    this.titleInput = document.getElementById('bookTitleInput');
    this.authorInput = document.getElementById('bookAuthorInput');
  }

  showBooksMethod(books) {
    this.bookList.textContent = '';
    for (let i = 0; i < books.length; i += 1) {
      const bookItem = document.createElement('li');
      const removeButton = document.createElement('button');

      bookItem.innerHTML = `"${books[i].title}" by ${books[i].author}`;
      removeButton.textContent = 'Remove Book';
      removeButton.className = 'removeButton';
      removeButton.setAttribute('data-index', `${i}`);

      bookItem.appendChild(removeButton);
      this.bookList.appendChild(bookItem);

      if (i % 2 === 0) {
        bookItem.setAttribute('style', 'background-color: #dbdbdb;');
      } else {
        bookItem.setAttribute('style', 'background-color:white');
      }
    }
  }
}