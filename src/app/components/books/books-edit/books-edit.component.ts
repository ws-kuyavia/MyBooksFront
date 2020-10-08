import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../../services/books/books.service';
import {Router} from '@angular/router';
import {ApiConsumerService} from '../../../services/api-consumer.service';
import {Book} from '../../../models/book/book.model';
import {MatDialog} from '@angular/material/dialog';
import {BooksListComponent} from '../books-list/books-list.component';
import {BooksDeleteDialogComponent} from '../books-delete/books-delete-dialog/books-delete-dialog.component';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
  @Input() data: Book;
  public editBookForm: FormGroup;
  error = '';
  // createBook
  panelOpenState = false;
  constructor(
    public dialog: MatDialog,
    private bookService: BooksService,
    private bookList: BooksListComponent,
    private router: Router,
    private ApiConsumer: ApiConsumerService
  ) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BooksDeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteThisBook();
      }
    });
  }

  deleteThisBook(): void {
    const book = new Book(
      this.data.id,
      this.editBookForm.controls.name.value,
      this.editBookForm.controls.category.value,
    );

    this.bookService.deleteBook(book, book.id).subscribe(
      response => {
        if ( response === null ) {
          this.bookList.getBooksData();
        }
      },
      errorResponse => {
        this.error = errorResponse.error.error;
      });
  }

  ngOnInit(): void {

    this.editBookForm = new FormGroup({
       id: new FormControl(this.data.id, [Validators.required]),
       name: new FormControl(this.data.name, [Validators.required]),
       category: new FormControl(this.data.category, [Validators.required]),
    });
  }



  onFormSubmitted(): void {
    const book = new Book(
      this.data.id,
      this.editBookForm.controls.name.value,
      this.editBookForm.controls.category.value,
    );

    this.bookService.updateBook(book, book.id).subscribe(
      response => {
        if (response) {
          this.data = book;
        }
      },
      errorResponse => {
        this.error = errorResponse.error.error;
      });
  }
}
