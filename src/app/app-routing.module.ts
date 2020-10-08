import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {UserGuardService} from './services/auth/user-guard.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/books/list'},
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ UserGuardService ],
    children: [
      {
        path: 'books',
        canActivate: [ UserGuardService ],
        loadChildren: () => import('./components/books/books.module').then(mod => mod.BooksModule),
        data: {breadcrumb: {label: 'Books', url: '/books/list', isLinking: true}}
      }]
  },
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', pathMatch: 'full', redirectTo: '/books/list'}
];


@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
