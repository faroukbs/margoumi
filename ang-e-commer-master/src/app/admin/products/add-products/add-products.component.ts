import { FormBuilder, Validators } from '@angular/forms';
import { CategoryProduct } from './../../../common/category-product';
import { CategoryProductService } from './../../../services/category-product.service';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: [
    './add-products.component.css',
    '../../../../assets/admin/css/paper-dashboard.css?v=2.0.1',
    '../../../../assets/admin/demo/demo.css',
    '../../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddProductsComponent implements OnInit {
  product: Product = new Product();
  categoryList?: CategoryProduct[];
  userFile: any;
  public imagePath: any;
  imgURL: any;

  constructor(
    private router: Router,
    public productService: ProductService,
    private categoryProduct: CategoryProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryProduct
      .getProductCategories()
      .subscribe((data: CategoryProduct[]) => {
        this.categoryList = data;
      });
    this.infoForm();
  }

  addProduct() {
    const formData = new FormData();

    const product = this.productService.dataForm.value;
    // formData.append('article', JSON.stringify(product));
    formData.append('product', JSON.stringify(product));
    formData.append('file', this.userFile);
    console.log(product);
    this.productService.addProductt(formData).subscribe((data) => {
      this.router.navigate(['/']);
    });
    
  }
  setNewCategory(category: CategoryProduct): void {
    this.productService.dataForm.value.category = category;
  }
  infoForm() {
    this.productService.dataForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      nprix: [0, [Validators.required]],
      gprix: [0, [Validators.required]],
      quantity: [0, [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        // this.toastr.success('Only images are supported.');

        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
}
