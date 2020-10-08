import { Injectable } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(public apiService: ApiConsumerService, public route: Router) { }

  canActivate(): boolean {
    if ( this.apiService.isAuthenticated() ){
      return true;
    } else {
      this.route.navigateByUrl('login');
      return false;
    }
  }

}
