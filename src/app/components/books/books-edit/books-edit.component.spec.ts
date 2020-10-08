import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksEditComponent } from './books-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import { MatDialogModule} from '@angular/material/dialog';
import {BooksListComponent} from '../books-list/books-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Book} from '../../../models/book/book.model';

describe('BooksEditComponent', () => {
  let component: BooksEditComponent;
  let fixture: ComponentFixture<BooksEditComponent>;
  let bookData: Book;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksEditComponent ],
      providers: [ BooksListComponent ],
      imports: [HttpClientModule, AppRoutingModule, MatDialogModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    bookData = new Book(123456700, 'test', 'test');
    fixture = TestBed.createComponent(BooksEditComponent);
    component = fixture.componentInstance;
    component.data = bookData;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
