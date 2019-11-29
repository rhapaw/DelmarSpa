import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../_models/employee';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEmployees(page?, itemsPerPage?, propertyParams?): Observable<PaginatedResult<Employee[]>>
  {
    const paginatedResult: PaginatedResult<Employee[]> = new PaginatedResult<Employee[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (propertyParams != null) {
      params = params.append('minAge', propertyParams.minAge);
      params = params.append('maxAge', propertyParams.maxAge);
      params = params.append('gender', propertyParams.gender);
      params = params.append('orderBy', propertyParams.orderBy);
      // console.log('InGetUsers', userParams.minAge, userParams.maxAge, userParams.gender, params );
    }

    return this.http
    .get<Employee[]>(this.baseUrl + 'employee', { observe: 'response', params })
    .pipe(
      map(response =>
        {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get('Pagination'));
          }
          return paginatedResult;
        }
      )
    );
  }

  getProperty(id): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + 'employee/' + id);
  }

  updateProperty(id: number, employee: Employee) {
    return this.http.put(this.baseUrl + 'employee/' + id, employee);
  }

  deleteProperty(id: number) {
    return this.http.delete(this.baseUrl + 'employee/' + id);
  }
}


