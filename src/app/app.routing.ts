import { Routes, RouterModule } from '@angular/router';
import {StudentComponent } from './pages/student/student.component';
import {CreateStudentComponent} from './pages/student/create-student/create-student.component';
import {DetailStudentComponent} from './pages/student/detail-student/detail-student.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { from } from 'rxjs';
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'student', pathMatch: 'full', },
     { path: '', component: AdminLayoutComponent, children:
     [
       {path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)] ,
  exports: [RouterModule]
})

export class AppRoutingModule { }
