import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado, EmpleadoService } from '../empleado.service';
import { PuestoService } from '../puesto.service';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {
  @Input() empleado!: Empleado;
  @Output() update = new EventEmitter<void>();
  editForm: FormGroup;
  puestos: string[] = [];

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private puestoService : PuestoService,
  ) {
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      puesto: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    if (this.empleado) {
      this.editForm.patchValue(this.empleado);
    }
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
    if (this.editForm.valid) {
      const nuevoNombre: string = this.editForm.get('nombre')?.value;
      const nuevoPuesto: string = this.editForm.get('puesto')?.value;
      this.empleadoService.updateEmpleado(this.empleado.id, nuevoNombre, nuevoPuesto);
      this.update.emit();
    }
  }
}
