import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-empolyee',
  templateUrl: './empolyee.component.html'
})
export class EmpolyeeComponent {
  employees: Employee[];
  title:string="List";
  constructor() {
    this.employees = [
      { empCode: 10001, empName: "Arvind", gender: "MALE", dob: "07/10/1984", deptname: "IT", desig: "SD", salary: 45000 },
      { empCode: 10002, empName: "Gaurav", gender: "MALE", dob: "02/06/1986", deptname: "IT", desig: "SD", salary: 45000 },
      { empCode: 10003, empName: "Ritesh", gender: "MALE", dob: "04/04/1981", deptname: "IT", desig: "DS", salary: 45000 }
    ];
  }

}

class Employee {
  empCode: number;
  empName: string;
  gender: string;
  dob: string;
  deptname: string;
  desig: string;
  salary: number;
}
