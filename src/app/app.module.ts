import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StudentComponent } from './pages/student/student.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { CreateStudentComponent } from './pages/student/create-student/create-student.component';
import { DetailStudentComponent } from './pages/student/detail-student/detail-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    StudentComponent,
    TestComponent,
    CreateStudentComponent,
    DetailStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(AppRoutes,{
    //   useHash: false
    // }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
