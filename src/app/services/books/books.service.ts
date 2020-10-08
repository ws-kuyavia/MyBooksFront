import {Injectable} from '@angular/core';
import {ApiConsumerService} from '../api-consumer.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private api: ApiConsumerService) {
  }

  getBooks(): Observable<object> {
    return this.api.get('books');
  }

  createBook(book): Observable<object> {
    return this.api.post('books', book);
  }

  updateBook(book, id): Observable<object> {
    return this.api.put(`books/` + id, book);
  }

  deleteBook(book, id): Observable<object> {
    return this.api.delete(`books/` + id, book);
  }

}

