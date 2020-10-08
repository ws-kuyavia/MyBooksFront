import {TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {ApiConsumerService} from '../api-consumer.service';
import {HttpClientModule} from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LoginService);

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
