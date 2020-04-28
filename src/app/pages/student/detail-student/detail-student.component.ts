import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../student.service';
import {Student} from '../../../student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private studentService: StudentService,
  ) { }
  id = +this.router.snapshot.paramMap.get('id');
  student: Student;

  ngOnInit(): void {
    this.getStudentDetail();
  }
  getStudentDetail(): void {
    this.studentService.getStudent(this.id)
    .subscribe(
      data => {
        this.student = data;
        console.log(this.student);
      },
      (error) => {
        console.log(error)
          alert(JSON.stringify(error.error.message) );
      });
    }
}
