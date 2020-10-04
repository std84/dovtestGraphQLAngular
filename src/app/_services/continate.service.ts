import { Injectable } from '@angular/core';
import { Continate } from '../_modal/continate';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ContinateService {


    //continate = [{"id":1,"Name":"north america","Code":"1"},{"id":2,"Name":"south america","Code":"2"},{"id":3,"Name":"europe","Code":"3"},{"id":4,"Name":"africa","Code":"4"},{"id":5,"Name":"asia","Code":"5"},{"id":6,"Name":"australia","Code":"6"}];
    constructor( private http: HttpClient ) { }
 
    getContinate(): Observable<Continate[]> {
        return this.http.get<Continate[]>('https://localhost:5001/Continate');
      }
}
