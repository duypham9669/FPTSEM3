import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import { createPopper } from '@popperjs/core';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
@Component({
  selector: 'app-product-foruser',
  templateUrl: './product-foruser.component.html',
  styleUrls: ['./product-foruser.component.css']
})
export class ProductForuserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  products: Observable<Product[]>;
  product: Product;
  product2: Product;
  submitted = false;
  categorylist: any;
  isupdated = false;
  constructor(private productService: ProductService) { }

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
  }

}
