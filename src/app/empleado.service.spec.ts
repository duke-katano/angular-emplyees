// empleado.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { EmpleadoService, Empleado } from './empleado.service';

describe('EmpleadoService', () => {
  let service: EmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadoService]
    });
    service = TestBed.inject(EmpleadoService);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });


  it('Se debe de crear', () => {
    expect(service).toBeTruthy();
  });

  it('Debe devolver un arreglo vacio cuando no haya empleados', () => {
    const empleados = service.getEmpleados();
    expect(empleados.length).toBe(0);
  });

  it('Debe poder agregar un nuevo empleado', () => {
    const empleado: Empleado = {
      id: 1,
      nombre: 'Alberto',
      apellidos: 'Perez',
      puesto: 'Desarrollador',
      fechaNacimiento: '1980-01-01'
    };

    service.addEmpleado(empleado);
    const empleados = service.getEmpleados();
    expect(empleados.length).toBe(1);
    expect(empleados[0]).toEqual(empleado);
  });

  it('Debe poder actualizar nombre y puesto de un empleado existente', () => {
    const empleado: Empleado = {
      id: 1,
      nombre: 'Jaime',
      apellidos: 'Perez',
      puesto: 'Desarrollador',
      fechaNacimiento: '2000-01-01'
    };
    service.addEmpleado(empleado);

    const nuevoNombre = 'Pedro';
    const nuevoPuesto = 'Diseñador';

    service.updateEmpleado(1, nuevoNombre, nuevoPuesto);
    const empleados = service.getEmpleados();
    expect(empleados.length).toBe(1);
    expect(empleados[0].nombre).toBe(nuevoNombre);
    expect(empleados[0].puesto).toBe(nuevoPuesto);
  });

  it('Debe poder borrar un empleado existente', () => {
    const empleado: Empleado = {
      id: 1,
      nombre: 'Fernando',
      apellidos: 'Ruiz',
      puesto: 'Desarrollador',
      fechaNacimiento: '7990-01-01'
    };
    service.addEmpleado(empleado);

    service.deleteEmpleado(0);
    const empleados = service.getEmpleados();
    expect(empleados.length).toBe(1);
  });


});
