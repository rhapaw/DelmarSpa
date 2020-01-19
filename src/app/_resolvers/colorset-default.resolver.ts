import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Colorset } from '../_models/colorset';
import { ColorsetService } from '../_services/colorset.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ColorsetDefaultResolver implements Resolve<Colorset> {

  constructor(
    private colorsetService: ColorsetService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Colorset> {
    return this.colorsetService.getDefaultColorset().pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving default colorset');
        // this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
