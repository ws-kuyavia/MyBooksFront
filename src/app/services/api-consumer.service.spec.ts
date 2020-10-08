import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpHeaders, HttpHandler, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import { ApiConsumerService } from './api-consumer.service';

describe('ApiConsumerService', () => {
  let service: ApiConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConsumerService],
         imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiConsumerService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
