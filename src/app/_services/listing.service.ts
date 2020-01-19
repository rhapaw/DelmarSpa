import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../_models/listing';
import { ListingParams } from '../_models/listingparams';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProperties(page?: number, itemsPerPage?: number, listingParams?: ListingParams): Observable<PaginatedResult<Listing[]>>
  {
    const paginatedResult: PaginatedResult<Listing[]> = new PaginatedResult<Listing[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
    }

    if (listingParams != null) {
      params = params.append('minAge', listingParams.minAge.toString());
      params = params.append('maxAge', listingParams.maxAge.toString());
      params = params.append('gender', listingParams.gender.toString());
      params = params.append('orderBy', listingParams.orderBy.toString());
      // console.log('InGetUsers', userParams.minAge, userParams.maxAge, userParams.gender, params );
    }

    return this.http
    .get<Listing[]>(this.baseUrl + 'property', { observe: 'response', params })
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

  getProperty(id): Observable<Listing> {
    return this.http.get<Listing>(this.baseUrl + 'property/' + id);
  }

  updateProperty(id: number, property: Listing) {
    return this.http.put(this.baseUrl + 'property/' + id, property);
  }

  deleteProperty(id: number) {
    return this.http.delete(this.baseUrl + 'property/' + id);
  }

}

