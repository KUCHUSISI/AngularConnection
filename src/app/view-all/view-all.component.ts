import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormGroupDirective,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.sass']
})
export class ViewAllComponent implements OnInit {
employee:Employee={
id:0,
name:'',
location:''
}
  constructor(private es:EmployeeService,
    private route:ActivatedRoute,
    private router:Router) { }
   
    employ:Employee=new Employee();
    employee1:any;
    array=[];
    // employee1:Employee[]=[];
  columns = ["Id","Name","Location"];
  index = ["id","name","location"];
  employees: Employee[] = [];
  ngOnInit():void
  {
     this.getdetails();
  }
  getdetails()
  {
    this.es.getAll().subscribe(
      response=>
      {
        return this.employees = response;
      },
      (error)=>console.log(error)
      )
  }
  updateEmployee(id:any)
  {
   this.es.getEmployee(id).subscribe(response=>{
     //console.log(response)
    this.employee1=response
    console.log(this.employee1)

   });
  
  }
  employeeupdateform=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    location:new FormControl()
  });
  updateEmploy(updemp:any):void
  {
    alert("hello")
    this.employee=new Employee();
    this.employee.id=this.EmployeeId?.value;
    this.employee.name=this.EmployeeName?.value;
    this.employee.location=this.EmployeeLocation?.value;

    this.es.editEmployee(this.employ.id,this.employee).subscribe(
      data=>{
        this.es.getAll().subscribe(data=>{
          this.employees=data
        })
      }
    )
  }
  delete(id:any)
  {
    this.es.deleteEmployee(id).
    subscribe(
      data =>{
        console.log(data);
        this.es.getAll().subscribe
        (data=>{this.employees=data})
      },
      error=>console.log(error)
    );
  }
  get EmployeeId()
  {
    return this.employeeupdateform.get('id');
  }
  get EmployeeName(){
    return this.employeeupdateform.get('name');
  }
  get EmployeeLocation(){
    return this.employeeupdateform.get('location');
  }
}
