import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpolyeeListComponent } from './empolyee/empolyeeList.component';
import { AddEmployeeComponent } from './empolyee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpolyeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
