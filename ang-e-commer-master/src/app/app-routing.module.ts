import { AddProductsComponent } from './admin/products/add-products/add-products.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { Role } from 'src/app/common/role';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'login', component: AuthComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
   {path: 'back', component: DashboardComponent},
   {path: 'addproduct', component: AddProductsComponent},
  // {path: 'category', component: ProductListComponent},
  // {path: 'products', component: ProductListComponent},
  // {path: '', redirectTo: '/products', pathMatch: 'full'},
  // {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
