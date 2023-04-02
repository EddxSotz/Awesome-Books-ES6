export class removeBook {
    removeBook = (books, index) => {
    this.booksList = books;
    this.booksList.splice(index, 1);
    localStorage.setItem('BooksList', JSON.stringify(this.booksList));
  }
}