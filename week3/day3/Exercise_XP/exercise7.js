// 1. Create an array of books (each book is an object)
const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/41aQPTCmeVL.jpg",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://m.media-amazon.com/images/I/91CAtU00MpL._SY466_.jpg",
    alreadyRead: false
  }
];

const container = document.getElementById('bookList');

allBooks.forEach(book => {
  const bookDiv = document.createElement('div');
  bookDiv.className = 'book ' + (book.alreadyRead ? 'read' : 'not-read');

  bookDiv.innerHTML = `
    <img src="${book.image}" alt="${book.title}" style="width:100%;border-radius:5px;">
    <h3>${book.title}</h3>
    <p><em>${book.author}</em></p>
    <p style="font-weight:bold;">${book.alreadyRead ? ' Already Read' : ' Not Read Yet'}</p>
  `;

  // Optional inline styles
  bookDiv.style.border = "2px solid #ccc";
  bookDiv.style.padding = "10px";
  bookDiv.style.margin = "10px";
  bookDiv.style.borderRadius = "10px";
  bookDiv.style.width = "200px";
  bookDiv.style.textAlign = "center";
  bookDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
  bookDiv.style.backgroundColor = book.alreadyRead ? "#d4edda" : "#f8d7da";

  container.appendChild(bookDiv);
});


// 2. Get the <section> where we will add the books
const section = document.querySelector(".listBooks");

// 3. Loop through the books and display each one
allBooks.forEach(book => {
  // Create a container div for each book
  const bookDiv = document.createElement("div");

  // Create text with title and author
  const text = document.createElement("p");
  text.textContent = `${book.title} written by ${book.author}`;

  // If already read, make the text red
  if (book.alreadyRead) {
    text.style.color = "red";
  }

  // Create the image and set its width to 100px
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // Add text and image to the div
  bookDiv.appendChild(text);
  bookDiv.appendChild(img);

  // Add the div to the section
  section.appendChild(bookDiv);
});

