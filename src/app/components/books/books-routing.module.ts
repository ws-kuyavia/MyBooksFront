import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksCreatePageComponent} from './pages/create/books-create.component';
import {BooksListPageComponent} from './pages/list/books-list.component';
import {BooksEditPageComponent} from './pages/edit/books-edit.component';

const routes: Routes = [
  {
  path: '',
  component: BooksListPageComponent,
  data: {breadcrumb: {label: 'List', isLinking: false}}
},
{
  path: 'list',
  component: BooksListPageComponent,
  data: {breadcrumb: {label: 'List', isLinking: false}}
},
  {
    path: 'create',
    component: BooksCreatePageComponent,
    data: {breadcrumb: {label: 'Create', isLinking: false}}
  },
  {
    path: ':id',
    component: BooksEditPageComponent,
    data: {breadcrumb: {label: 'Edit', isLinking: false}}
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
