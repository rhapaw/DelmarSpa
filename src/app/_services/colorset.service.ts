import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colorset } from '../_models/colorset';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorsetService
{
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getColorsets(page?, itemsPerPage?, colorsetParams?): Observable<PaginatedResult<Colorset[]>>
  {
    const paginatedResult: PaginatedResult<Colorset[]> = new PaginatedResult<Colorset[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (colorsetParams != null) {
      params = params.append('minAge', colorsetParams.minAge);
      params = params.append('maxAge', colorsetParams.maxAge);
      params = params.append('gender', colorsetParams.gender);
      params = params.append('orderBy', colorsetParams.orderBy);
      // console.log('InGetUsers', userParams.minAge, userParams.maxAge, userParams.gender, params );
    }

    return this.http
    .get<Colorset[]>(this.baseUrl + 'Colorset', { observe: 'response', params })
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

  getColorset(id): Observable<Colorset> {
    return this.http.get<Colorset>(this.baseUrl + 'Colorset/' + id);
  }

  updateColorset(id: number, colorset: Colorset) {
    return this.http.put(this.baseUrl + 'Colorset/' + id, colorset);
  }

  deleteColorset(id: number) {
    return this.http.delete(this.baseUrl + 'Colorset/' + id);
  }

}







