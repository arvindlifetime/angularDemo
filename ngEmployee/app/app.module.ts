import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import { AddEmployeeComponent } from './empolyee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpolyeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
