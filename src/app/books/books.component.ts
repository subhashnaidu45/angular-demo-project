// import { Component } from '@angular/core';

// @Component({
//   selector: '',
//   templateUrl: './app/books/books.component.html',
//   styleUrls: ['./app/books/books.component.css'],
// })
// export class BooksComponent {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name = 'A Tale of Two Cities';
  author = 'Charles Dickens';
  src = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg';
  name1 = 'The Little Prince';
  author1 = 'Antoine de Saint-Exupéry';
  src1 = 'https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG';
  constructor() {}

  ngOnInit() {}
}
