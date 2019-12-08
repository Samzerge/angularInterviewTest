import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service for retrieving prize data
 */
@Injectable({ providedIn: 'root' })
export class PrizeService {

    constructor(protected http: HttpClient) {}

    getPrizeData(): Observable<any> {
        return this.http.get<any>('../../assets/sample.json');
    }

}
