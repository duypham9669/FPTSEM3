import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category.service';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../../../model/product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
  products: Observable<Product[]>;
  dtTrigger: any;
  constructor(
    private router: ActivatedRoute,
    private categoryService: CategoryService,
    ) { }

    id = +this.router.snapshot.paramMap.get('id');
    category: Category;
    ngOnInit(): void {
      this.getCategoryDetail();
      this.categoryService.getListProduct(this.id).subscribe(data =>{
        this.products = data;
        this.dtTrigger.next();
        });
    }
    getCategoryDetail(): void {
      this.categoryService.getCategory(this.id)
      .subscribe(
        data => {
          this.category = data;
          console.log(this.category);
        },
        (error) => {
          console.log(error)
            alert(JSON.stringify(error.error.message) );
        });
      }
}
