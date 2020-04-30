import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from '../../pages/student/student.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import {CreateStudentComponent} from '../../pages/student/create-student/create-student.component';
import {DetailStudentComponent} from '../../pages/student/detail-student/detail-student.component';
import {CategoryComponent} from '../../pages/category/category.component';
import {CreateCategoryComponent} from '../../pages/category/create-category/create-category.component';
import {DetailCategoryComponent} from '../../pages/category/detail-category/detail-category.component';
import {ProductsComponent} from '../../pages/products/products.component';
import {CreateProductComponent} from '../../pages/products/create-product/create-product.component';
import {DetailProductComponent } from '../../pages/products/detail-product/detail-product.component';
import {ProductForuserComponent} from '../../pages/product-foruser/product-foruser.component';
import { from } from 'rxjs';
export const AdminLayoutRoutes: Routes = [
    { path: 'student',        component: StudentComponent},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'student/add',    component: CreateStudentComponent },
    { path: 'student/:id',    component: DetailStudentComponent },
    {path : 'category',       component: CategoryComponent},
    {path : 'category/add',   component: CreateCategoryComponent},
    {path : 'category/:id',   component: DetailCategoryComponent},
    {path : 'product',        component: ProductsComponent},
    {path : 'product/add',    component: CreateProductComponent},
    {path : 'product/:id',    component: DetailProductComponent},
    {path : 'product-foruser', component: ProductForuserComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(AdminLayoutRoutes)] ,
    exports: [RouterModule]
})

export class AppRoutingModule { }
