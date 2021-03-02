import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  url : string = "http://localhost:8080/";
  getAll()
  {
    return this.http.get<Employee[]>(this.url+'employee');
  }
  createEmployeeData(employee:object)
  {
    return this.http.post(this.url+'save-employee',employee);
  }
  deleteEmployee(id:number)
  {
    return this.http.delete(this.url+'delete-employee/'+id);
  }
  editEmployee(id:any,value:any)
  {
    alert(value)
    return this.http.put(this.url+'update-employee/'+id,value);
  }
  getEmployee(id:number):Observable<Employee>
  {
   return this.http.get<Employee>(this.url+'get-employee/'+id)
  }
}
