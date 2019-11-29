import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Colorset } from '../_models/colorset';
import { ColorsetService } from '../_services/colorset.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ColorsetListResolver implements Resolve<Colorset[]> {
  pageNumber = 1;
  pageSize = 3;

  constructor(
    private colorsetService: ColorsetService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Colorset[]> {
    return this.colorsetService.getColorsets(this.pageNumber, this.pageSize).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
