import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService, Empleado } from '../empleado.service';
import { PuestoService } from '../puesto.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {
  empleadoForm: FormGroup;
  puestos: string[] = [];
  guardadoExitoso: boolean = false;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private puestoService: PuestoService
  ) {
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      puesto: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.puestoService.getPuestos().subscribe(
      data => {
        this.puestos = data;
      },
      error => {
        console.error('Error al obtener los puestos', error);
      }
    );
  }

  onSubmit(): void {
    if (this.empleadoForm.valid) {
      const nuevoEmpleado: Empleado = this.empleadoForm.value;
      this.empleadoService.addEmpleado(nuevoEmpleado);
      this.guardadoExitoso = true;
      setTimeout(() => {
        this.guardadoExitoso = false;
        this.empleadoForm.reset();
      }, 2000);
    }
  }
}
