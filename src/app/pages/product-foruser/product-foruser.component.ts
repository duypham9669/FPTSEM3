import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import { Category } from 'app/model/category';

@Component({
  selector: 'app-product-foruser',
  templateUrl: './product-foruser.component.html',
  styleUrls: ['./product-foruser.component.css']
})
export class ProductForuserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  products: Observable<Product[]>;
  categorys: Observable<Category[]>;
  product: Product;
  product2: Product;
  submitted = false;
  categorylist: any;
  isupdated = false;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 5,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.productService.getAllProduct().subscribe(data =>{
    this.products = data;
    this.dtTrigger.next();
    });
    this.getCategory();
  }
  changListProduct(id: number) {
    this.categoryService.getListProduct(id)
    .subscribe(
      data => {
        this.products = data;
        this.dtTrigger.next();
      },
      error => {
        console.log('ERROR: ' + error);
        this.products=null;
        alert("Category not have Product");
      });
  }
  getCategory(){
    this.categoryService.getCategoryList().subscribe(data =>{
      this.categorys = data;
      this.dtTrigger.next();
      });
  }

}
