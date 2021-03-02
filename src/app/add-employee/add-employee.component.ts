import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ViewAllComponent } from '../view-all/view-all.component';
import { FormsModule} from '@angular/forms';
import { resolveNaptr } from 'dns';
import { error } from 'protractor';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit 
{
  employee:Employee={
    id:0,
    name:'',
    location:''
  }
  employees: Employee[] = [];
  constructor(private es:EmployeeService) { }
  ngOnInit(): void
   {
     this.es.getAll().subscribe(response=>{
        this.employees=response
     },error=>{
      console.log(error)
    })     
  }
  createEmployee():void
  {
    const data=
    {
      id:this.employee.id,
      name:this.employee.name,
      location:this.employee.location
    };
    this.es.createEmployeeData(data).
    subscribe(response=>
      {console.log(response);},
      error=>{
        console.log(error);
      })
  }  
}
