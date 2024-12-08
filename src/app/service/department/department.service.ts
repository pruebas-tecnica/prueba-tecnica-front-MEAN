import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor() { }
  private readonly apiUrl =`${environment.apiUrl}/api/departamentos/`;

  private http = inject(HttpClient);

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartmentByCode(codigo: number) : Observable<Department> {
    return this.http.get<Department>(`this.apiUrl${codigo}`);
  }
}
