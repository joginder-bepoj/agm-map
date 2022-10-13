
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HTTPService {

    constructor(private http: HttpClient) {
    }

    getServices(): Observable<any> {
        return this.http.get('./assets/services.json');
    }
}
