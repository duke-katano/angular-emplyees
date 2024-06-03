// src/app/puesto.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PuestoService } from './puesto.service';

describe('PuestoService', () => {
  let service: PuestoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PuestoService]
    });
    service = TestBed.inject(PuestoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Se debe crear', () => {
    expect(service).toBeTruthy();
  });

  it('Debe traer los puestos de la API via GET', () => {
    const mockResponse = {
      positions: [
        'full-stack developer',
        'front-end developer',
        'sw admin',
        'help desk',
        'scrum master',
        'product manager'
      ]
    };

    service.getPuestos().subscribe(response => {
      expect(response).toBeTruthy();
      expect(response).toEqual(mockResponse.positions);
    });

    const req = httpMock.expectOne('https://ibillboard.com/api/positions');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
