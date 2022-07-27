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
  constructor() {}

  ngOnInit(): void {}
}
