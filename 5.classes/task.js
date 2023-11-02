class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null; 
    }
  fix () {
    this.state *= 1.5;
    return this.state;
  }
    set state(number) {
     if (number < 0) {
     return this._state = 0;
      } else {
      if (number > 100) {
     return this._state = 100;
      }
  
    else {
     return this._state = number;
   }
    }
  }
       get state(){
         return this._state;
     }}
    class Magazine extends PrintEditionItem {
      constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine"; 
      }
      
    }
   class Book extends PrintEditionItem {
   constructor (name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = "book";
     this.author = author;
   }}
  class NovelBook extends Book {
   constructor (name, releaseDate, pagesCount) {
     super (name, releaseDate, pagesCount);
      this.type = "novel";
      this.author = author;
    }}
  class FantasticBook extends Book {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
     this.type = "fantastic";
     this.author = author;
   }}
  class DetectiveBook extends Book {
   cconstructor (name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = "detective";
     this.author = author;
   }}