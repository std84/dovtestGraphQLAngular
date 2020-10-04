import { Injectable, ɵConsole } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../_modal/Country';
import { CountryService } from '../_services/country.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CountryResolver implements Resolve<Country[]> {


    constructor(private countryService: CountryService,
            private router: Router, ) {}
            resolve(route: ActivatedRouteSnapshot): Observable<Country[]> {
                return this.countryService.getCountries(route.params['id']).pipe(
                    catchError( error => {
                        console.log(error);
                        return of(null);
                    })
                );
            }
}
