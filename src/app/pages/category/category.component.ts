import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  categorys: Observable<Category[]>;
  categoryObject: Observable<object>;
  category: Category;
  category2: Category;
  submitted = false;
  categorylist: any;
  isupdated = false;
  ngOnInit(): void {
    this.dtOptions = {
    pageLength: 5,
    stateSave: true,
    lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
    processing: true
  };
  this.categoryService.getCategoryList().subscribe(data =>{
  this.categorys = data;
  this.dtTrigger.next();
  });
  }
  getCategory2(id: number){
    this.categoryService.getCategory(id)
    .subscribe(
      data => {
        this.category2 = data;
        console.log(this.category);
      },
      (error) => {
        console.log(error)
          alert(JSON.stringify(error.error.message) );
      });
    }
  
    deleteCategoryById(id: number) {
    this.categoryService.deleteCategory(id)
    .subscribe(
      data => {
        this.reloadData();
        alert("Category has deleted");
        this.changeisUpdate();
      },
      error => console.log('ERROR: ' + error));
  }
  reloadData() {
    // this.categorys = this.categoryService.getCategoryList();
    this.categoryService.getCategoryList().subscribe(data =>{
      this.categorys = data;
      this.dtTrigger.next();
      });
  }
  changeisUpdate() {
    this.isupdated = false;
  }
}
