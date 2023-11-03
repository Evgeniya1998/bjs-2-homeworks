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
     }
  }
  
  
  const sherlock = new PrintEditionItem(
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
  );
  
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //100
  sherlock.fix();
  console.log(sherlock.state); //100
  
  class Magazine extends PrintEditionItem {
      constructor(name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.type = "magazine";
      }
  }
  
  class Book extends PrintEditionItem {
      constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.author = author;
          this.type = "book";
      }
  }
  
  class NovelBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = "novel";
      }
  }
  
  class FantasticBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = "fantastic";
      }
  }
  
  class DetectiveBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = "detective";
      }
  }
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15


  // Задача 2

  class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }
    findBookBy(type, value) {
        let result = this.books.find(book => book[type] === value);
        if (result == undefined) {
            return null;
        } else {
            return result;
        }
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++)
            if (this.books[i].name === bookName) {
                const book = this.books[i];
                this.books.splice(i,1);
                return book;
            } 
        
                return null
            }
        }
    
