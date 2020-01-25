import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../_models/employee';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/internal/operators';
import { Contact } from '../_models/contact';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getContacts(page?, itemsPerPage?, propertyParams?): Observable<PaginatedResult<Contact[]>>
  {
    console.log('getContacts');
    const paginatedResult: PaginatedResult<Contact[]> = new PaginatedResult<Contact[]>();

    let params = new HttpParams();

    page = 1;
    itemsPerPage = 5;

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    console.log('Params: ', params);

    return this.http
    .get<Contact[]>(this.baseUrl + 'contacts', { observe: 'response', params })
    .pipe(
      map(response =>
        {
          console.log('Contacts: ', response.body);
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
      .get<Employee[]>(this.baseUrl + 'employees', { observe: 'response', params })
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
    return this.http.get<Employee>(this.baseUrl + 'employees/' + id);
  }

  updateProperty(id: number, employee: Employee) {
    return this.http.put(this.baseUrl + 'employees/' + id, employee);
  }

  deleteProperty(id: number) {
    return this.http.delete(this.baseUrl + 'employees/' + id);
  }
}


