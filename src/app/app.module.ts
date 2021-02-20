import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { Todo1Component } from './todo1/todo1.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './usermodule/login/login.component';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { TestctopComponent } from './testctop/testctop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './user/user.module';
import { FormsTestComponent } from './forms-test/forms-test.component';
import {Form} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveexampleComponent } from './reactiveexample/reactiveexample.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Todo1Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TestcomponentComponent,
    TestctopComponent,
    PageNotFoundComponent,
    FormsTestComponent,
    ReactiveexampleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsermoduleModule,
    HttpClientModule,
    AdminModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
