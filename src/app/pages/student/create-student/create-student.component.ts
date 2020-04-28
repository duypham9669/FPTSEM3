import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../student.service';
import {Student} from '../../../student';
import { from, Observable, Subject } from 'rxjs';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.submitted = false;

  }
    // tslint:disable-next-line: member-ordering
    studentsaveform = new FormGroup({
    student_id: new FormControl('' , [Validators.required] ),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    gender: new FormControl('' , Validators.required ),
    address: new FormControl('' , Validators.required ),

  });

  saveStudent(saveStudent) {
    this.student = new Student();
    this.student.student_id = this.Student_id.value;
    this.student.name = this.Name.value;
    this.student.age = this.Age.value;
    this.student.gender = this.Gender.value;
    this.student.address = this.Address.value;

    this.save();
  }


  get Student_id() {
    return this.studentsaveform.get('student_id');
  }
  get Name() {
    return this.studentsaveform.get('name');
  }
  get Age() {
    return this.studentsaveform.get('age');
  }
  get Gender() {
    return this.studentsaveform.get('gender');
  }
  get Address() {
    return this.studentsaveform.get('address');
  }
  addStudentForm() {
    this.submitted = false;
    this.studentsaveform.reset();
  }

  save() {
    this.studentService.createStudent(this.student).subscribe(
      (result) => this.submitted = true,
      (error) => {
        console.log(error)
          alert(JSON.stringify(error.error.message) )
      });
      this.student = new Student();
  }

}
