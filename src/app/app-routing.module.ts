import { viewClassName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewAllComponent } from './view-all/view-all.component';

const routes: Routes = [
  {path:'',component:ViewAllComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'view',component:ViewAllComponent},
  {path:'edit',component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
