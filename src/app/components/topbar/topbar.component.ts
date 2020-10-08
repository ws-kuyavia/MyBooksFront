import { Component, OnInit } from '@angular/core';
import {ApiConsumerService} from '../../services/api-consumer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private apiClient: ApiConsumerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogoutClick(): boolean {
    this.apiClient.unsetToken();
    this.router.navigate(['login']);
    return false;
  }

}
