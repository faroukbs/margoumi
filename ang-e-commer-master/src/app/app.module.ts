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
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AddProductsComponent } from './admin/products/add-products/add-products.component';
import { UpdateProductsComponent } from './admin/products/update-products/update-products.component';
import { ProducsListComponent } from './admin/products/producs-list/producs-list.component';
import { AddCategoryComponent } from './admin/categoryProducts/add-category/add-category.component';
import { UpdateCategoryComponent } from './admin/categoryProducts/update-category/update-category.component';
import { ListCategoryComponent } from './admin/categoryProducts/list-category/list-category.component';
import { UserProfileComponent } from './admin/user/user-profile/user-profile.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';


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
    AuthComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    ProducsListComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ListCategoryComponent,
    UserProfileComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
