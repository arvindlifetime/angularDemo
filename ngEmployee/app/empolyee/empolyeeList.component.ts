import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-list',
  templateUrl: './empolyeeList.component.html'
})
export class EmpolyeeListComponent {
  employees: Employee[];
  title:string="List";
  constructor() {
    this.employees = [
      { empCode: 10001, empName: "Arvind", gender: "MALE", dob: "07/10/1984", deptname: "IT", desig: "SD", salary: 45000 },
      { empCode: 10002, empName: "Gaurav", gender: "MALE", dob: "02/06/1986", deptname: "IT", desig: "SD", salary: 45000 },
      { empCode: 10003, empName: "Ritesh", gender: "MALE", dob: "04/04/1981", deptname: "IT", desig: "DS", salary: 45000 },
      { empCode: 10004, empName: "Santosh", gender: "MALE", dob: "07/15/1984", deptname: "IT", desig: "DG", salary: 35000 },
      { empCode: 10005, empName: "Lavkush", gender: "MALE", dob: "02/25/1986", deptname: "IT", desig: "DG", salary: 35000 },
      { empCode: 10006, empName: "Akhilesh", gender: "MALE", dob: "04/14/1995", deptname: "IT", desig: "DS", salary: 25000 },
      { empCode: 10007, empName: "Mukesh", gender: "MALE", dob: "07/18/1994", deptname: "DC", desig: "OF", salary: 15000 },
      { empCode: 10008, empName: "Rinku", gender: "MALE", dob: "02/26/1999", deptname: "DC", desig: "HD", salary: 15000 },
      { empCode: 10009, empName: "Ravi", gender: "MALE", dob: "04/24/1989", deptname: "DC", desig: "OC", salary: 10000 }
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
