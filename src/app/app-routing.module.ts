import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';

const routes: Routes = [
  { path: '', component: EmpleadosListComponent },
  { path: 'nuevo-empleado', component: EmpleadoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
