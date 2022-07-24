import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DataFormComponent } from './data-form/data-form.component';
import { CartComponent } from './cart/cart.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'detail/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'form',component:DataFormComponent},
  {path:'confirmation',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
