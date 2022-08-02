import { UpdateCategoryComponent } from './admin/categoryProducts/update-category/update-category.component';
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
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductsComponent } from './admin/products/add-products/add-products.component';
import { ProducsListComponent } from './admin/products/producs-list/producs-list.component';
import { AddCategoryComponent } from './admin/categoryProducts/add-category/add-category.component';
import { ListCategoryComponent } from './admin/categoryProducts/list-category/list-category.component';
import { UserProfileComponent } from './admin/user/user-profile/user-profile.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductbycatComponent } from './components/productbycat/productbycat.component';


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
    ProducsListComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    UserProfileComponent,
    UserListComponent,
    NavbarComponent,
    UpdateCategoryComponent,
    CheckoutComponent,
    ProductbycatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
