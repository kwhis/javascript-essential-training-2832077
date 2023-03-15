class Book {
  constructor(title, author, yearPublished, hasRead) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.hasRead = hasRead;
  }
  calcAge() {
    let now = new Date();
    return now.getFullYear() - this.yearPublished;
  }
  updateReadStatus(newStatus) {
    this.hasRead = newStatus;
    console.log("Just Finished Reading");
  }
}

export default Book;
