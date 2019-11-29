import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../_models/property';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProperties(page?, itemsPerPage?, propertyParams?): Observable<PaginatedResult<Property[]>>
  {
    const paginatedResult: PaginatedResult<Property[]> = new PaginatedResult<Property[]>();

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
    .get<Property[]>(this.baseUrl + 'property', { observe: 'response', params })
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

  getProperty(id): Observable<Property> {
    return this.http.get<Property>(this.baseUrl + 'property/' + id);
  }

  updateProperty(id: number, property: Property) {
    return this.http.put(this.baseUrl + 'property/' + id, property);
  }

  deleteProperty(id: number) {
    return this.http.delete(this.baseUrl + 'property/' + id);
  }

}

