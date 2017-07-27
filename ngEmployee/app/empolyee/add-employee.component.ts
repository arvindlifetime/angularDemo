import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
  title: string = "Entry Form"
  gender: string = "0";
  deptname: string = "0";
  designame: string = "0";
  showG: boolean = false;
  empname: string;

  deptList: any = ['DEP1', 'DEP2', 'DEP3'];
  desigList: any = ['DESG-A', 'DESG-B', 'DESG-C'];

  constructor() { }
  ngOnInit() {
  }

  genderOnChange(): void {

    /*if (this.gender == "0") {
      this.showG = false;
    } else { this.showG = true; }*/
    this.showG = this.gender == "0" ? false : true;

  }

  deptOnChange(): void {

  }
  desigOnChange(): void {

  }
}


