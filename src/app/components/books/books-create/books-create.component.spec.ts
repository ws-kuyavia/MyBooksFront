import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCreateComponent } from './books-create.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('BooksCreateComponent', () => {
  let component: BooksCreateComponent;
  let fixture: ComponentFixture<BooksCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksCreateComponent ],
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
