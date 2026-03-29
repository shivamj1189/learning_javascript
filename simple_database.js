const books = [
  {
    bookname: "To Kill a Mockingbird",
    genre: "Fiction",
    published: 1960,
    edition: "1st"
  },
  {
    bookname: "1984",
    genre: "Dystopian",
    published: 1949,
    edition: "1st"
  },
  {
    bookname: "The Great Gatsby",
    genre: "Classic",
    published: 1925,
    edition: "1st"
  },
  {
    bookname: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    published: 1997,
    edition: "1st"
  },
  {
    bookname: "The Alchemist",
    genre: "Adventure",
    published: 1988,
    edition: "1st"
  }
];


const userbooks=books.filter((book)=>book.genre==='Fiction' || book.genre==='Fantasy')
console.log(userbooks);

const userbooks2=books.filter((book)=>book.published>1950)
console.log(userbooks2);