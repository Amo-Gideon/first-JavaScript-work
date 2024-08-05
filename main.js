
//Creating Library Array

let library=[];
library.push({title:"The Great Gatsby",author:"F. Scott Fitzgerald",yearPublished:1925,available:true},
    {title:"To Kill a Mockingbird",author:"Harper Lee",yearPublished:1960,available:true},
    {title:1984,author:"George Orwell", yearPublished:1949,available:false},
    {title:"Pride and Prejudice",author:"Jane Austen",yearPublished:1813,available:true});

//Updating  the availibilty of a book

//Finding the total length of the library book
console.log("Length of the array library");
let library_length= library.length;
console.log(library_length);

//Using the index of the book to modify it
let book3= library[library_length-2];
console.log(book3);
//Updated the object with title 1984 availibility to true
book3.available=true;
console.log("Updated availibility");
console.log(book3);

//Removing the book Pride and Prejudice from the library array
let book4=library[library_length-1];
let remove_book = library.splice(book4,1);
console.log("Pride and Prejudice removed");
console.log(book4);

//Checking the availibility of a book in the library
let book1=library[0];
console.log("Book 1");
console.log(book1);
let check =library.includes(book1);
console.log(check);

//Borrow the first book
book1.available=false;
console.log("Updated book details");
console.log(book1);

//Uisng the shift method
library.shift();
console.log("Updated Library");
console.log(library);

//Adding a new book to the start of the library
let newBook= library.unshift({title:"The Catcher in the Rye",author:"J.D Salinger", yearPublished:1951});
console.log(library);

//Extracting the book titles
console.log("Extrating and Joing book titles")
let index_1= library[0];
let title_1=index_1['title'];

let index_2=library[1];
let title_2=index_2['title'];

let index_3=library[2];
let title_3=index_3['title'];

let combined_titles=[];
combined_titles.push([title_1],[title_2],[title_3]);
console.log(combined_titles);
let joined_titles= combined_titles.join(', ');
console.log(joined_titles);


//Creating a new section of library
let newArrivals=library.slice(1);
console.log("New Arrivals")
console.log(newArrivals)
