import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../../services/books/books.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  dataSource = [];

  constructor(public booksService: BooksService, private router: Router) {
  }


  getBooksData(): void {
    let response;
    this.booksService.getBooks().subscribe(
      (resp) => {
        response = resp;
        this.dataSource = response.data.sort((a, b) => {
          return a - b;
        });
      }
    );
  }

  ngOnInit(): void {
    this.getBooksData();
  }


}
