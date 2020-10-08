import { Book } from './book.model';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book(null,'test','test')).toBeTruthy();
  });
});
