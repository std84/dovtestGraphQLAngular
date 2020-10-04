import { Injectable } from '@angular/core';
import { Continate } from '../_modal/continate';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../_modal/Country';
@Injectable()
export class CountryService {
    result: Country[];
    constructor( private http: HttpClient ) { }
    getCountries(id): Observable<Country[]> {
        return this.http.get<Country[]>('https://localhost:5001/Country/' + id);
        // this.result = this.countries.filter(s => s.Code === id);
   
       // return of(result);

    }
}
