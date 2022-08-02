import { ProductbycatComponent } from './components/productbycat/productbycat.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UpdateCategoryComponent } from './admin/categoryProducts/update-category/update-category.component';
import { AddCategoryComponent } from './admin/categoryProducts/add-category/add-category.component';
import { ProducsListComponent } from './admin/products/producs-list/producs-list.component';
import { UserProfileComponent } from './admin/user/user-profile/user-profile.component';
import { AddProductsComponent } from './admin/products/add-products/add-products.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { Role } from 'src/app/common/role';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './admin/categoryProducts/list-category/list-category.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'login', component: AuthComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },},
  { path: 'back', component: DashboardComponent },
  { path: 'addproduct', component: AddProductsComponent },
  { path: 'listProduct', component: ProducsListComponent },
  { path: 'myprofile', component: UserProfileComponent },
   {path: 'listCategory', component: ListCategoryComponent},
   {path: 'addCategory', component: AddCategoryComponent},
   {path: 'updateCategory', component: UpdateCategoryComponent},
    {path:'checkout', component: CheckoutComponent},
   {path: 'listProduct/:id', component:ProductbycatComponent},
  // {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
