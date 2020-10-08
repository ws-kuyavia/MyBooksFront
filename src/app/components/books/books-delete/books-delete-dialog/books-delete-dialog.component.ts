import {Component, OnInit} from '@angular/core';
import {Book} from '../../../../models/book/book.model';
import {BooksService} from '../../../../services/books/books.service';
import {Router} from '@angular/router';
import {ApiConsumerService} from '../../../../services/api-consumer.service';

@Component({
  selector: 'app-books-delete-dialog',
  templateUrl: './books-delete-dialog.component.html',
  styleUrls: ['./books-delete-dialog.component.css']
})
export class BooksDeleteDialogComponent implements OnInit {

  constructor(private bookService: BooksService,
              private router: Router,
              private ApiConsumer: ApiConsumerService) {
  }

  ngOnInit(): void {
  }

}
