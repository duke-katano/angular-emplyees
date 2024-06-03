import { Component, OnInit } from '@angular/core';
import { EmpleadoService, Empleado } from '../empleado.service';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {
  empleados: Empleado[] = [];
  searchText: string = '';
  empleadoSeleccionado?: Empleado | null;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleados = this.empleadoService.getEmpleados();
  }

  onSearch(): void {
    this.empleados = this.empleadoService.getEmpleados().filter(e =>
      e.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  editEmpleado(empleado: Empleado): void {
    this.empleadoSeleccionado = empleado;
  }


  deleteEmpleado(id: number): void {
    this.empleadoService.deleteEmpleado(id);
    this.empleados = this.empleadoService.getEmpleados();
    this.empleadoSeleccionado = null;
  }

  onUpdate(): void {
    this.empleadoSeleccionado = undefined;
    this.empleados = this.empleadoService.getEmpleados();
  }
}
