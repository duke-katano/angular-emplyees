import { Injectable } from '@angular/core';

export interface Empleado {
  id: number;
  nombre: string;
  apellidos: string;
  puesto: string;
  fechaNacimiento: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = [];
  private idCounter = 0;

  constructor() {
    const storedEmpleados = localStorage.getItem('empleados');
    if (storedEmpleados) {
      this.empleados = JSON.parse(storedEmpleados);
      this.idCounter = this.empleados.length > 0 ? Math.max(...this.empleados.map(e => e.id)) + 1 : 0;
    }
  }

  getEmpleados(): Empleado[] {
    return this.empleados;
  }

  addEmpleado(empleado: Empleado): void {
    const storedEmpleados = localStorage.getItem('empleados');
    let maxId = 0;
    if (storedEmpleados) {
      const empleados = JSON.parse(storedEmpleados);
      maxId = Math.max(...empleados.map((e: Empleado) => e.id), 0);
    }
    empleado.id = maxId + 1;
    this.empleados.push(empleado);
    this.saveToLocalStorage();
  }

  updateEmpleado(id: number, nuevoNombre: string, nuevoPuesto: string): void {
    const empleadoIndex = this.empleados.findIndex(e => e.id === id);
    if (empleadoIndex !== -1) {
      console.log('Updating employee...');
      this.empleados[empleadoIndex].nombre = nuevoNombre;
      this.empleados[empleadoIndex].puesto = nuevoPuesto;
      console.log('Updated employee:', this.empleados[empleadoIndex]);
      this.saveToLocalStorage();
    }
  }
  deleteEmpleado(id: number): void {
    this.empleados = this.empleados.filter(e => e.id !== id);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
  }
}
