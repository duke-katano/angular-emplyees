import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { EmpleadoService } from './empleado.service';
import { PuestoService } from './puesto.service';
import { EmpleadoEditComponent } from './empleado-edit/empleado-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosListComponent,
    EmpleadoFormComponent,
    EmpleadoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmpleadoService, PuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
