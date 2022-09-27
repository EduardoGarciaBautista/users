import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserFormComponent} from "./components/user-form/user-form.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserListItemComponent} from "./components/user-list-item/user-list-item.component";
import { DetailComponent } from './components/detail/detail.component';
import {UserAdminService} from "./core/services/user-admin.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    UserListItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
