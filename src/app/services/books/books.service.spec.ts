import {fakeAsync, TestBed} from '@angular/core/testing';

import { BooksService } from './books.service';
import { Book} from '../../models/book/book.model';
import {Observable, of} from 'rxjs';
import {ApiConsumerService} from '../api-consumer.service';
import {HttpClientModule} from '@angular/common/http';
import {delay} from 'rxjs/operators';


describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BooksService]});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
