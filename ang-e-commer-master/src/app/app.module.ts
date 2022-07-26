import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { Routes, RouterModule} from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './common/role';


const routes: Routes = [
  {path: 'products/:id', component: ProductdetailsComponent},
   {path: '', component: HomeComponent},
   {path: 'cart-details', component: CartDetailsComponent},
   {path: 'login', component: AuthComponent},
   {path: 'admin', component: DashboardComponent, canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}},
  // {path: '401', component: HomeComponent},
  // {path: 'category/:id', component: ProductListComponent},
  // {path: 'category', component: ProductListComponent},
  // {path: 'products', component: ProductListComponent},
  // {path: '', redirectTo: '/products', pathMatch: 'full'},
  // {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    CategoryProductComponent,
    SidebarComponent,
    DashboardComponent,
    ProductdetailsComponent,
    CartDetailsComponent,
    CarouselComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
