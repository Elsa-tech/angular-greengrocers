import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
  export class StoreService {

    http = inject(HttpClient)

    get vegetables(): Promise<Item[]> {
        const res = this.http.get(`${environment.apiUrl}groceries?type=vegetable`).toPromise()
      // @ts-ignore
      return res
    }

    get fruits(): Promise<Item[]> {
        const res = this.http.get(`${environment.apiUrl}groceries?type=fruit`).toPromise()
      // @ts-ignore
      return res
    }

// Store service
// get groceries

// add cart service that takes array from this service

}
