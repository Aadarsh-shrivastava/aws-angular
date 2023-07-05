import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ProductPageComponent } from './product-page/product-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { authGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[authGuard]},
  { path: '../addproduct', component: AddProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'enabled' }),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
