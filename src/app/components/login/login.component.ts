import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiConsumerService} from '../../services/api-consumer.service';
import {Credentials} from '../../models/credentials/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  error = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private ApiConsumer: ApiConsumerService

  ) {
  }

  ngOnInit(): void {
    if (this.ApiConsumer.isAuthenticated()) {
      this.router.navigateByUrl('');
    } else {
      this.ApiConsumer.unsetToken();
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onFormSubmitted(): void {
    const cred = new Credentials(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value,
    );

    this.loginService.login(cred).subscribe(
      response => {
        if (response.access_token) {
          this.ApiConsumer.setToken(response.access_token);
          this.router.navigateByUrl('');
        }
      },
      errorResponse => {
        this.error = errorResponse.error.error;
      });
  }
}
