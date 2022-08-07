import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros!: Array<Book>;
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll():void {
    this.bookService.retrieveAll().subscribe(data => {
      this.livros = data;
      console.log(data)
    })
  }

}
