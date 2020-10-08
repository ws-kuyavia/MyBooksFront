import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksCreateComponent} from './books-create/books-create.component';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksEditComponent} from './books-edit/books-edit.component';
import {BooksCreatePageComponent} from './pages/create/books-create.component';
import {BooksEditPageComponent} from './pages/edit/books-edit.component';
import {BooksListPageComponent} from './pages/list/books-list.component';
import {BooksRoutingModule} from './books-routing.module';
import {SharedLibsModule} from '../../shared-libs.module';
import { BooksDeleteDialogComponent } from './books-delete/books-delete-dialog/books-delete-dialog.component';


@NgModule({
  declarations: [
    BooksCreateComponent,
    BooksEditComponent,
    BooksListComponent,
    BooksCreatePageComponent,
    BooksEditPageComponent,
    BooksListPageComponent,
    BooksDeleteDialogComponent,
  ],
  imports: [
    SharedLibsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
