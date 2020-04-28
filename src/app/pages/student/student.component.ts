import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StudentService } from '../../student.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';  

// tslint:disable-next-line: import-spacing
import{Student} from '../../student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private studentService: StudentService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  students: Observable<Student[]>;
  studentObject: Observable<object>;
  student: Student;
  student2: Student;
  submitted = false;
  studentlist: any;
  isupdated = false;

  ngOnInit() {
    this.dtOptions = {
      pageLength: 5,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.studentService.getStudentList().subscribe(data =>{
    this.students = data;
    this.dtTrigger.next();
    });
  }

  deleteStudentById(id: number) {
    this.studentService.deleteStudent(id)
    .subscribe(
      data => {
        this.reloadData();
        alert("student has deleted");
        this.changeisUpdate();
      },
      error => console.log('ERROR: ' + error));
  }
  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }
  reloadData() {
    this.students = this.studentService.getStudentList();
    this.studentService.getStudentList().subscribe(data =>{
      this.students = data;
      this.dtTrigger.next();
      });
  }

  // UPDATE
  updateStudent(id: number) {
    this.studentService.getStudent(id)
      .subscribe(
        data => {
          // this.studentlist = data;
          this.student2 = data;
        },
        error => alert(error));
  }
      // tslint:disable-next-line: member-ordering
    studentupdateform = new FormGroup({
      student_id: new FormControl('' , [Validators.required] ),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      gender: new FormControl('' , Validators.required ),
      address: new FormControl('' , Validators.required ),
  });

  updateStu() {
    this.student2 = new Student();
    this.student2.student_id = this.Student_id.value;
   this.student2.name = this.Name.value;
   this.student2.age = this.Age.value;
   this.student2.gender = this.Gender.value;
   this.student2.address = this.Address.value;

   this.studentService.updateStudent(this.student2.student_id, this.student2).subscribe(
    data => {
      this.isupdated = true;
      // tslint:disable-next-line: no-shadowed-variable
      this.studentService.getStudentList().subscribe( data => {
        this.students = data;
        });
    },
    error => console.log(error));
  }

  get Name() {
    return this.studentupdateform.get('name');
  }

  get Age() {
    return this.studentupdateform.get('age');
  }

  get Gender() {
    return this.studentupdateform.get('gender');
  }

  get Student_id() {
    return this.studentupdateform.get('student_id');
  }

  get Address() {
    return this.studentupdateform.get('address');
  }
  changeisUpdate() {
    this.isupdated = false;
  }

}
