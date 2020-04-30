import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = new Category();
  submitted = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  categorysaveform = new FormGroup({
    category_id: new FormControl('' , [Validators.required] ),
    category_name: new FormControl('', Validators.required),
    category_description: new FormControl('', Validators.required),
  });
  saveCategory() {
    this.category = new Category();
    this.category.category_id = this.category_id.value;
    this.category.category_name = this.category_name.value;
    this.category.category_description = this.category_description.value;
    this.save();
  }
  get category_name() {
    return this.categorysaveform.get('category_name');
  }
  get category_id() {
    return this.categorysaveform.get('category_id');
  }
  get category_description() {
    return this.categorysaveform.get('category_description');
  }

  addCategoryForm() {
    this.submitted = false;
    this.categorysaveform.reset();
  }

  save() {
    this.categoryService.createCategory(this.category).subscribe(
      (result) => this.submitted = true,
      (error) => {
        console.log(error)
          alert(JSON.stringify(error.error.message) )
      });
      this.category = new Category();
  }
}
