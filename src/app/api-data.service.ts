import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {Track} from './track';

@Injectable()
export class ApiDataService {
    private apiKey = '324920068c54ad843b2905293599d294';
    private country = 'latvia';
    private apiUrl = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${this.country}&api_key=${this.apiKey}&format=json`;

    constructor(private http: HttpClient) {
    }

    getData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl)
            .pipe(
                tap(data => console.log(`fetched data`)),
                catchError(this.handleError('getData', []))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }


}
