import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Colorset } from '../_models/colorset';
import { ColorsetService } from '../_services/colorset.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ColorsetDetailResolver implements Resolve<Colorset> {
  pageNumber = 1;
  pageSize = 3;

  constructor(
    private colorsetService: ColorsetService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Colorset> {
    return this.colorsetService.getColorset(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving colorset with id: ' + route.params['id']);
        // this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
