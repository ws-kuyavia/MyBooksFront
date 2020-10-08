import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDeleteDialogComponent } from './books-delete-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('BooksDeleteDialogComponent', () => {
  let component: BooksDeleteDialogComponent;
  let fixture: ComponentFixture<BooksDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDeleteDialogComponent ],
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
