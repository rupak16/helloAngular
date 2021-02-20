import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LazyloadingModule } from './lazyloading/lazyloading.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';

import { FormsTestComponent } from './forms-test/forms-test.component';
import {ReactiveexampleComponent} from './reactiveexample/reactiveexample.component'

const routes: Routes = [
  {path:'home1',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'todo',component:TodoComponent},
  {path:'forms',component:FormsTestComponent},
  {path:'reactiveforms',component:ReactiveexampleComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
