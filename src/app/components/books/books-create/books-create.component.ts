import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../../services/books/books.service';
import {Router} from '@angular/router';
// import {ApiConsumerService} from '../../../services/api-consumer.service';
import {Book} from '../../../models/book/book.model';

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit {

  public addBookForm: FormGroup;
  error = '';
  constructor(
    private bookService: BooksService,
    private router: Router,
    // private ApiConsumer: ApiConsumerService
  ) {
  }

  ngOnInit(): void {
    this.router.navigated = true;
    this.addBookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }


  onFormSubmitted(): void {
    const book = new Book(
      null,
      this.addBookForm.controls.name.value,
      this.addBookForm.controls.category.value,
    );

    this.bookService.createBook(book).subscribe(
      response => {
        if (response) {
          // this.refreshTokenService.runMainTimeout();
            this.router.navigateByUrl('books/list');
        }
      },
      errorResponse => {
        this.error = errorResponse.error.error;
      });
  }
}

