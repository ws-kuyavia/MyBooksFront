import {NgModule} from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiConsumerService} from './services/api-consumer.service';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';

// export function tokenGetter() {
//   return localStorage.getItem('access_token');
// }

@NgModule({
  entryComponents: [],

  declarations: [
    DashboardComponent,
    TopbarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    DashboardComponent,
    LoginComponent,
    TopbarComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    ApiConsumerService
  ]
})
export class SharedLibsModule { }

