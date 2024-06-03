import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  private apiURL = 'https://ibillboard.com/api/positions';

  constructor(private http: HttpClient) { }

  getPuestos(): Observable<string[]> {
    return this.http.get<{ positions: string[] }>(this.apiURL).pipe(
      map(response => response.positions)
    );
  }
}
